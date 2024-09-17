import { Entries, FromEntries, Keys } from "my-utilities";
import "responsive-component"

declare global {
  interface ObjectConstructor {
    fromEntries<T>(array: T): FromEntries<T>;
    entries<T>(obj: T): Entries<T>;
    keys<T>(obj: T): Keys<T>;
  }
}


declare module 'responsive-component/types' {
    type Breakpoints = "FDFD";
}

export {}