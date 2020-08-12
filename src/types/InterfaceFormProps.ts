import { InterfaceError } from "../types/InterfaceError";
export interface InterfaceFormProps {
  validate: (a: React.ChangeEvent<HTMLInputElement>) => {};
  error: InterfaceError;
  status: number;
}
