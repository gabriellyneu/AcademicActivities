import { Request, Response } from "express";
import { list } from "../models/instances";
import { ApiView } from "../views/ApiView";

export class ListController {
  public add(req: Request, res: Response): void {
    const { item } = req.body;

    if (item === undefined) {
      return ApiView.error(res, "Informe o campo 'item' no corpo da requisição.", 400);
    }

    list.add(item);

    return ApiView.success(res, { mensagem: "Item adicionado na lista." }, 201);
  }

  public remove(_req: Request, res: Response): void {
    const removed = list.remove();

    if (removed === undefined) {
      return ApiView.error(res, "A lista está vazia.", 404);
    }

    return ApiView.success(res, { removido: removed });
  }

  public removeAt(req: Request, res: Response): void {
    const index = Number(req.params.index);

    if (Number.isNaN(index)) {
      return ApiView.error(res, "O parâmetro index deve ser um número.", 400);
    }

    const removed = list.removeAt(index);

    if (removed === undefined) {
      return ApiView.error(res, "Índice inválido para remoção.", 404);
    }

    return ApiView.success(res, { removido: removed, indice: index });
  }

  public getAt(req: Request, res: Response): void {
    const index = Number(req.params.index);

    if (Number.isNaN(index)) {
      return ApiView.error(res, "O parâmetro index deve ser um número.", 400);
    }

    const item = list.getAt(index);

    if (item === undefined) {
      return ApiView.error(res, "Índice inválido para consulta.", 404);
    }

    return ApiView.success(res, { indice: index, item });
  }

  public peek(_req: Request, res: Response): void {
    const last = list.peek();

    if (last === undefined) {
      return ApiView.error(res, "A lista está vazia.", 404);
    }

    return ApiView.success(res, { ultimo: last });
  }

  public getAll(_req: Request, res: Response): void {
    return ApiView.success(res, {
      estrutura: {
        id: list.getId(),
        name: list.name,
      },
      tamanho: list.getSize(),
      itens: list.getItems(),
    });
  }

  public clear(_req: Request, res: Response): void {
    list.clear();

    return ApiView.success(res, { mensagem: "Lista limpa com sucesso." });
  }
}