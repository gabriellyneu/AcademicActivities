import { Request, Response } from "express";
import { queue } from "../models/instances";
import { ApiView } from "../views/ApiView";

export class QueueController {
  public add(req: Request, res: Response): void {
    const { item } = req.body;

    if (item === undefined) {
      return ApiView.error(res, "Informe o campo 'item' no corpo da requisição.", 400);
    }

    queue.add(item);

    return ApiView.success(res, { mensagem: "Item adicionado na fila." }, 201);
  }

  public remove(_req: Request, res: Response): void {
    const removed = queue.remove();

    if (removed === undefined) {
      return ApiView.error(res, "A fila está vazia.", 404);
    }

    return ApiView.success(res, { removido: removed });
  }

  public peek(_req: Request, res: Response): void {
    const front = queue.peek();

    if (front === undefined) {
      return ApiView.error(res, "A fila está vazia.", 404);
    }

    return ApiView.success(res, { frente: front });
  }

  public getAll(_req: Request, res: Response): void {
    return ApiView.success(res, {
      estrutura: {
        id: queue.getId(),
        name: queue.name,
      },
      tamanho: queue.getSize(),
      itens: queue.getItems(),
    });
  }

  public clear(_req: Request, res: Response): void {
    queue.clear();

    return ApiView.success(res, { mensagem: "Fila limpa com sucesso." });
  }
}