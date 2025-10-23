import { NextFunction, Request, Response } from "express";
type Handler = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
declare const asyncHandler: (handler: Handler) => (req: Request, res: Response, next: NextFunction) => void;
export default asyncHandler;
//# sourceMappingURL=async-handler.d.ts.map