import { UserDTO } from "../dtos/user.dto";
export declare const findAll: () => Promise<UserDTO[]>;
export declare const findById: (id: number) => Promise<UserDTO | null>;
export declare const create: (nombre: string, correo: string, edad: number) => Promise<UserDTO>;
export declare const update: (id: number, nombre: string, correo: string, edad: number) => Promise<UserDTO | null>;
export declare const remove: (id: number) => Promise<boolean>;
//# sourceMappingURL=user.repository.d.ts.map