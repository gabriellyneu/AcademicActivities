import { Request, Response } from "express";
import { LinearStructure } from "../models/LinearStructure";
import { list, queue, stack } from "../models/instances";
import { ApiView } from "../views/ApiView";

export class StructureStatsController {
  public getStats(_req: Request, res: Response): void {
    return ApiView.success(res, {
      totalEstruturasCriadas: LinearStructure.getCreatedStructures(),
      estruturas: [
        {
          id: stack.getId(),
          name: stack.name,
          tamanho: stack.getSize(),
          tipo: "pilha",
        },
        {
          id: queue.getId(),
          name: queue.name,
          tamanho: queue.getSize(),
          tipo: "fila",
        },
        {
          id: list.getId(),
          name: list.name,
          tamanho: list.getSize(),
          tipo: "lista",
        },
      ],
    });
  }
}