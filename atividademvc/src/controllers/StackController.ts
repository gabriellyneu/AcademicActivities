import { Request, Response } from "express";
import { stack } from "../models/instances";
import { ApiView } from "../views/ApiView";

export class StackController {
  public add(req: Request, res: Response): void {
    const { item } = req.body;

    if (item === undefined) {
      return ApiView.error(res, "Informe o campo 'item' no corpo da requisição.", 400);
    }

    stack.add(item);

    return ApiView.success(res, { mensagem: "Item adicionado na pilha." }, 201);
  }

  public remove(_req: Request, res: Response): void {
    const removed = stack.remove();

    if (removed === undefined) {
      return ApiView.error(res, "A pilha está vazia.", 404);
    }

    return ApiView.success(res, { removido: removed });
  }

  public peek(_req: Request, res: Response): void {
    const top = stack.peek();

    if (top === undefined) {
      return ApiView.error(res, "A pilha está vazia.", 404);
    }

    return ApiView.success(res, { topo: top });
  }

  public getAll(_req: Request, res: Response): void {
    return ApiView.success(res, {
      estrutura: {
        id: stack.getId(),
        name: stack.name,
      },
      tamanho: stack.getSize(),
      itens: stack.getItems(),
    });
  }

  public clear(_req: Request, res: Response): void {
    stack.clear();

    return ApiView.success(res, { mensagem: "Pilha limpa com sucesso." });
  }
}