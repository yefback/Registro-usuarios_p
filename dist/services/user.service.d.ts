import { UserDTO } from "../dtos/user.dto";
export declare const getAllUsers: () => Promise<UserDTO[]>;
export declare const getUserById: (id: number) => Promise<UserDTO>;
export declare const createUser: (nombre: string, correo: string, edad: number) => Promise<UserDTO>;
export declare const updateUser: (id: number, nombre: string, correo: string, edad: number) => Promise<UserDTO>;
export declare const deleteUser: (id: number) => Promise<void>;
//# sourceMappingURL=user.service.d.ts.map