
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Transacao
 * 
 */
export type Transacao = $Result.DefaultSelection<Prisma.$TransacaoPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Conta
 * 
 */
export type Conta = $Result.DefaultSelection<Prisma.$ContaPayload>
/**
 * Model Meta
 * 
 */
export type Meta = $Result.DefaultSelection<Prisma.$MetaPayload>
/**
 * Model Orcamento
 * 
 */
export type Orcamento = $Result.DefaultSelection<Prisma.$OrcamentoPayload>
/**
 * Model Documento
 * 
 */
export type Documento = $Result.DefaultSelection<Prisma.$DocumentoPayload>
/**
 * Model Notificacao
 * 
 */
export type Notificacao = $Result.DefaultSelection<Prisma.$NotificacaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoTransacao: {
  RECEITA: 'RECEITA',
  DESPESA: 'DESPESA',
  TRANSFERENCIA: 'TRANSFERENCIA'
};

export type TipoTransacao = (typeof TipoTransacao)[keyof typeof TipoTransacao]


export const StatusTransacao: {
  PENDENTE: 'PENDENTE',
  CONCLUIDA: 'CONCLUIDA',
  CANCELADA: 'CANCELADA'
};

export type StatusTransacao = (typeof StatusTransacao)[keyof typeof StatusTransacao]


export const CategoriaTipo: {
  ALIMENTACAO: 'ALIMENTACAO',
  TRANSPORTE: 'TRANSPORTE',
  MORADIA: 'MORADIA',
  SAUDE: 'SAUDE',
  EDUCACAO: 'EDUCACAO',
  LAZER: 'LAZER',
  INVESTIMENTO: 'INVESTIMENTO',
  OUTROS: 'OUTROS'
};

export type CategoriaTipo = (typeof CategoriaTipo)[keyof typeof CategoriaTipo]


export const PeriodicidadeMeta: {
  DIARIA: 'DIARIA',
  SEMANAL: 'SEMANAL',
  MENSAL: 'MENSAL',
  ANUAL: 'ANUAL'
};

export type PeriodicidadeMeta = (typeof PeriodicidadeMeta)[keyof typeof PeriodicidadeMeta]

}

export type TipoTransacao = $Enums.TipoTransacao

export const TipoTransacao: typeof $Enums.TipoTransacao

export type StatusTransacao = $Enums.StatusTransacao

export const StatusTransacao: typeof $Enums.StatusTransacao

export type CategoriaTipo = $Enums.CategoriaTipo

export const CategoriaTipo: typeof $Enums.CategoriaTipo

export type PeriodicidadeMeta = $Enums.PeriodicidadeMeta

export const PeriodicidadeMeta: typeof $Enums.PeriodicidadeMeta

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transacao`: Exposes CRUD operations for the **Transacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transacaos
    * const transacaos = await prisma.transacao.findMany()
    * ```
    */
  get transacao(): Prisma.TransacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conta`: Exposes CRUD operations for the **Conta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contas
    * const contas = await prisma.conta.findMany()
    * ```
    */
  get conta(): Prisma.ContaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meta`: Exposes CRUD operations for the **Meta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metas
    * const metas = await prisma.meta.findMany()
    * ```
    */
  get meta(): Prisma.MetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orcamento`: Exposes CRUD operations for the **Orcamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orcamentos
    * const orcamentos = await prisma.orcamento.findMany()
    * ```
    */
  get orcamento(): Prisma.OrcamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documento`: Exposes CRUD operations for the **Documento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documentos
    * const documentos = await prisma.documento.findMany()
    * ```
    */
  get documento(): Prisma.DocumentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacao`: Exposes CRUD operations for the **Notificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacaos
    * const notificacaos = await prisma.notificacao.findMany()
    * ```
    */
  get notificacao(): Prisma.NotificacaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Transacao: 'Transacao',
    Categoria: 'Categoria',
    Conta: 'Conta',
    Meta: 'Meta',
    Orcamento: 'Orcamento',
    Documento: 'Documento',
    Notificacao: 'Notificacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "transacao" | "categoria" | "conta" | "meta" | "orcamento" | "documento" | "notificacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Transacao: {
        payload: Prisma.$TransacaoPayload<ExtArgs>
        fields: Prisma.TransacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          findFirst: {
            args: Prisma.TransacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          findMany: {
            args: Prisma.TransacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>[]
          }
          create: {
            args: Prisma.TransacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          createMany: {
            args: Prisma.TransacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>[]
          }
          delete: {
            args: Prisma.TransacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          update: {
            args: Prisma.TransacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          deleteMany: {
            args: Prisma.TransacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>[]
          }
          upsert: {
            args: Prisma.TransacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          aggregate: {
            args: Prisma.TransacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransacao>
          }
          groupBy: {
            args: Prisma.TransacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransacaoCountArgs<ExtArgs>
            result: $Utils.Optional<TransacaoCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Conta: {
        payload: Prisma.$ContaPayload<ExtArgs>
        fields: Prisma.ContaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPayload>
          }
          findFirst: {
            args: Prisma.ContaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPayload>
          }
          findMany: {
            args: Prisma.ContaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPayload>[]
          }
          create: {
            args: Prisma.ContaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPayload>
          }
          createMany: {
            args: Prisma.ContaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPayload>[]
          }
          delete: {
            args: Prisma.ContaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPayload>
          }
          update: {
            args: Prisma.ContaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPayload>
          }
          deleteMany: {
            args: Prisma.ContaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPayload>[]
          }
          upsert: {
            args: Prisma.ContaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPayload>
          }
          aggregate: {
            args: Prisma.ContaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConta>
          }
          groupBy: {
            args: Prisma.ContaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContaCountArgs<ExtArgs>
            result: $Utils.Optional<ContaCountAggregateOutputType> | number
          }
        }
      }
      Meta: {
        payload: Prisma.$MetaPayload<ExtArgs>
        fields: Prisma.MetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          findFirst: {
            args: Prisma.MetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          findMany: {
            args: Prisma.MetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          create: {
            args: Prisma.MetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          createMany: {
            args: Prisma.MetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          delete: {
            args: Prisma.MetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          update: {
            args: Prisma.MetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          deleteMany: {
            args: Prisma.MetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          upsert: {
            args: Prisma.MetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          aggregate: {
            args: Prisma.MetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeta>
          }
          groupBy: {
            args: Prisma.MetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetaCountArgs<ExtArgs>
            result: $Utils.Optional<MetaCountAggregateOutputType> | number
          }
        }
      }
      Orcamento: {
        payload: Prisma.$OrcamentoPayload<ExtArgs>
        fields: Prisma.OrcamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrcamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrcamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          findFirst: {
            args: Prisma.OrcamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrcamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          findMany: {
            args: Prisma.OrcamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>[]
          }
          create: {
            args: Prisma.OrcamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          createMany: {
            args: Prisma.OrcamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrcamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>[]
          }
          delete: {
            args: Prisma.OrcamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          update: {
            args: Prisma.OrcamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          deleteMany: {
            args: Prisma.OrcamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrcamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrcamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>[]
          }
          upsert: {
            args: Prisma.OrcamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          aggregate: {
            args: Prisma.OrcamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrcamento>
          }
          groupBy: {
            args: Prisma.OrcamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrcamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrcamentoCountArgs<ExtArgs>
            result: $Utils.Optional<OrcamentoCountAggregateOutputType> | number
          }
        }
      }
      Documento: {
        payload: Prisma.$DocumentoPayload<ExtArgs>
        fields: Prisma.DocumentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          findFirst: {
            args: Prisma.DocumentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          findMany: {
            args: Prisma.DocumentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>[]
          }
          create: {
            args: Prisma.DocumentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          createMany: {
            args: Prisma.DocumentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>[]
          }
          delete: {
            args: Prisma.DocumentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          update: {
            args: Prisma.DocumentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          deleteMany: {
            args: Prisma.DocumentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>[]
          }
          upsert: {
            args: Prisma.DocumentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          aggregate: {
            args: Prisma.DocumentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumento>
          }
          groupBy: {
            args: Prisma.DocumentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentoCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentoCountAggregateOutputType> | number
          }
        }
      }
      Notificacao: {
        payload: Prisma.$NotificacaoPayload<ExtArgs>
        fields: Prisma.NotificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findFirst: {
            args: Prisma.NotificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findMany: {
            args: Prisma.NotificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          create: {
            args: Prisma.NotificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          createMany: {
            args: Prisma.NotificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          delete: {
            args: Prisma.NotificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          update: {
            args: Prisma.NotificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          deleteMany: {
            args: Prisma.NotificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          upsert: {
            args: Prisma.NotificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          aggregate: {
            args: Prisma.NotificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacao>
          }
          groupBy: {
            args: Prisma.NotificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    transacao?: TransacaoOmit
    categoria?: CategoriaOmit
    conta?: ContaOmit
    meta?: MetaOmit
    orcamento?: OrcamentoOmit
    documento?: DocumentoOmit
    notificacao?: NotificacaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    transacoes: number
    categorias: number
    metas: number
    orcamentos: number
    documentos: number
    notificacoes: number
    contas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transacoes?: boolean | UserCountOutputTypeCountTransacoesArgs
    categorias?: boolean | UserCountOutputTypeCountCategoriasArgs
    metas?: boolean | UserCountOutputTypeCountMetasArgs
    orcamentos?: boolean | UserCountOutputTypeCountOrcamentosArgs
    documentos?: boolean | UserCountOutputTypeCountDocumentosArgs
    notificacoes?: boolean | UserCountOutputTypeCountNotificacoesArgs
    contas?: boolean | UserCountOutputTypeCountContasArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrcamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrcamentoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContaWhereInput
  }


  /**
   * Count Type TransacaoCountOutputType
   */

  export type TransacaoCountOutputType = {
    documentos: number
  }

  export type TransacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | TransacaoCountOutputTypeCountDocumentosArgs
  }

  // Custom InputTypes
  /**
   * TransacaoCountOutputType without action
   */
  export type TransacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransacaoCountOutputType
     */
    select?: TransacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransacaoCountOutputType without action
   */
  export type TransacaoCountOutputTypeCountDocumentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    transacoes: number
    orcamentos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transacoes?: boolean | CategoriaCountOutputTypeCountTransacoesArgs
    orcamentos?: boolean | CategoriaCountOutputTypeCountOrcamentosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountTransacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountOrcamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrcamentoWhereInput
  }


  /**
   * Count Type ContaCountOutputType
   */

  export type ContaCountOutputType = {
    transacoes: number
  }

  export type ContaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transacoes?: boolean | ContaCountOutputTypeCountTransacoesArgs
  }

  // Custom InputTypes
  /**
   * ContaCountOutputType without action
   */
  export type ContaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaCountOutputType
     */
    select?: ContaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContaCountOutputType without action
   */
  export type ContaCountOutputTypeCountTransacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
  }


  /**
   * Count Type MetaCountOutputType
   */

  export type MetaCountOutputType = {
    transacoes: number
  }

  export type MetaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transacoes?: boolean | MetaCountOutputTypeCountTransacoesArgs
  }

  // Custom InputTypes
  /**
   * MetaCountOutputType without action
   */
  export type MetaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaCountOutputType
     */
    select?: MetaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MetaCountOutputType without action
   */
  export type MetaCountOutputTypeCountTransacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senhaHash: string | null
    cpf: string | null
    telefone: string | null
    dataNascimento: Date | null
    avatarUrl: string | null
    ativo: boolean | null
    emailVerificado: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senhaHash: string | null
    cpf: string | null
    telefone: string | null
    dataNascimento: Date | null
    avatarUrl: string | null
    ativo: boolean | null
    emailVerificado: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senhaHash: number
    cpf: number
    telefone: number
    dataNascimento: number
    avatarUrl: number
    ativo: number
    emailVerificado: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senhaHash?: true
    cpf?: true
    telefone?: true
    dataNascimento?: true
    avatarUrl?: true
    ativo?: true
    emailVerificado?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senhaHash?: true
    cpf?: true
    telefone?: true
    dataNascimento?: true
    avatarUrl?: true
    ativo?: true
    emailVerificado?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senhaHash?: true
    cpf?: true
    telefone?: true
    dataNascimento?: true
    avatarUrl?: true
    ativo?: true
    emailVerificado?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nome: string
    email: string
    senhaHash: string
    cpf: string | null
    telefone: string | null
    dataNascimento: Date | null
    avatarUrl: string | null
    ativo: boolean
    emailVerificado: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    cpf?: boolean
    telefone?: boolean
    dataNascimento?: boolean
    avatarUrl?: boolean
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    transacoes?: boolean | User$transacoesArgs<ExtArgs>
    categorias?: boolean | User$categoriasArgs<ExtArgs>
    metas?: boolean | User$metasArgs<ExtArgs>
    orcamentos?: boolean | User$orcamentosArgs<ExtArgs>
    documentos?: boolean | User$documentosArgs<ExtArgs>
    notificacoes?: boolean | User$notificacoesArgs<ExtArgs>
    contas?: boolean | User$contasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    cpf?: boolean
    telefone?: boolean
    dataNascimento?: boolean
    avatarUrl?: boolean
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    cpf?: boolean
    telefone?: boolean
    dataNascimento?: boolean
    avatarUrl?: boolean
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    cpf?: boolean
    telefone?: boolean
    dataNascimento?: boolean
    avatarUrl?: boolean
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senhaHash" | "cpf" | "telefone" | "dataNascimento" | "avatarUrl" | "ativo" | "emailVerificado" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transacoes?: boolean | User$transacoesArgs<ExtArgs>
    categorias?: boolean | User$categoriasArgs<ExtArgs>
    metas?: boolean | User$metasArgs<ExtArgs>
    orcamentos?: boolean | User$orcamentosArgs<ExtArgs>
    documentos?: boolean | User$documentosArgs<ExtArgs>
    notificacoes?: boolean | User$notificacoesArgs<ExtArgs>
    contas?: boolean | User$contasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      transacoes: Prisma.$TransacaoPayload<ExtArgs>[]
      categorias: Prisma.$CategoriaPayload<ExtArgs>[]
      metas: Prisma.$MetaPayload<ExtArgs>[]
      orcamentos: Prisma.$OrcamentoPayload<ExtArgs>[]
      documentos: Prisma.$DocumentoPayload<ExtArgs>[]
      notificacoes: Prisma.$NotificacaoPayload<ExtArgs>[]
      contas: Prisma.$ContaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senhaHash: string
      cpf: string | null
      telefone: string | null
      dataNascimento: Date | null
      avatarUrl: string | null
      ativo: boolean
      emailVerificado: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transacoes<T extends User$transacoesArgs<ExtArgs> = {}>(args?: Subset<T, User$transacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categorias<T extends User$categoriasArgs<ExtArgs> = {}>(args?: Subset<T, User$categoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metas<T extends User$metasArgs<ExtArgs> = {}>(args?: Subset<T, User$metasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orcamentos<T extends User$orcamentosArgs<ExtArgs> = {}>(args?: Subset<T, User$orcamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documentos<T extends User$documentosArgs<ExtArgs> = {}>(args?: Subset<T, User$documentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificacoes<T extends User$notificacoesArgs<ExtArgs> = {}>(args?: Subset<T, User$notificacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contas<T extends User$contasArgs<ExtArgs> = {}>(args?: Subset<T, User$contasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nome: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly senhaHash: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly telefone: FieldRef<"User", 'String'>
    readonly dataNascimento: FieldRef<"User", 'DateTime'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly ativo: FieldRef<"User", 'Boolean'>
    readonly emailVerificado: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.transacoes
   */
  export type User$transacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    cursor?: TransacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * User.categorias
   */
  export type User$categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    cursor?: CategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * User.metas
   */
  export type User$metasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    where?: MetaWhereInput
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    cursor?: MetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * User.orcamentos
   */
  export type User$orcamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    where?: OrcamentoWhereInput
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    cursor?: OrcamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrcamentoScalarFieldEnum | OrcamentoScalarFieldEnum[]
  }

  /**
   * User.documentos
   */
  export type User$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    cursor?: DocumentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * User.notificacoes
   */
  export type User$notificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    cursor?: NotificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * User.contas
   */
  export type User$contasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conta
     */
    select?: ContaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conta
     */
    omit?: ContaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaInclude<ExtArgs> | null
    where?: ContaWhereInput
    orderBy?: ContaOrderByWithRelationInput | ContaOrderByWithRelationInput[]
    cursor?: ContaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContaScalarFieldEnum | ContaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Transacao
   */

  export type AggregateTransacao = {
    _count: TransacaoCountAggregateOutputType | null
    _avg: TransacaoAvgAggregateOutputType | null
    _sum: TransacaoSumAggregateOutputType | null
    _min: TransacaoMinAggregateOutputType | null
    _max: TransacaoMaxAggregateOutputType | null
  }

  export type TransacaoAvgAggregateOutputType = {
    valor: Decimal | null
  }

  export type TransacaoSumAggregateOutputType = {
    valor: Decimal | null
  }

  export type TransacaoMinAggregateOutputType = {
    id: string | null
    descricao: string | null
    valor: Decimal | null
    tipo: $Enums.TipoTransacao | null
    data: Date | null
    status: $Enums.StatusTransacao | null
    observacoes: string | null
    recorrente: boolean | null
    recorrenciaId: string | null
    userId: string | null
    categoriaId: string | null
    contaId: string | null
    metaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransacaoMaxAggregateOutputType = {
    id: string | null
    descricao: string | null
    valor: Decimal | null
    tipo: $Enums.TipoTransacao | null
    data: Date | null
    status: $Enums.StatusTransacao | null
    observacoes: string | null
    recorrente: boolean | null
    recorrenciaId: string | null
    userId: string | null
    categoriaId: string | null
    contaId: string | null
    metaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransacaoCountAggregateOutputType = {
    id: number
    descricao: number
    valor: number
    tipo: number
    data: number
    status: number
    observacoes: number
    tags: number
    recorrente: number
    recorrenciaId: number
    userId: number
    categoriaId: number
    contaId: number
    metaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransacaoAvgAggregateInputType = {
    valor?: true
  }

  export type TransacaoSumAggregateInputType = {
    valor?: true
  }

  export type TransacaoMinAggregateInputType = {
    id?: true
    descricao?: true
    valor?: true
    tipo?: true
    data?: true
    status?: true
    observacoes?: true
    recorrente?: true
    recorrenciaId?: true
    userId?: true
    categoriaId?: true
    contaId?: true
    metaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransacaoMaxAggregateInputType = {
    id?: true
    descricao?: true
    valor?: true
    tipo?: true
    data?: true
    status?: true
    observacoes?: true
    recorrente?: true
    recorrenciaId?: true
    userId?: true
    categoriaId?: true
    contaId?: true
    metaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransacaoCountAggregateInputType = {
    id?: true
    descricao?: true
    valor?: true
    tipo?: true
    data?: true
    status?: true
    observacoes?: true
    tags?: true
    recorrente?: true
    recorrenciaId?: true
    userId?: true
    categoriaId?: true
    contaId?: true
    metaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacao to aggregate.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transacaos
    **/
    _count?: true | TransacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransacaoMaxAggregateInputType
  }

  export type GetTransacaoAggregateType<T extends TransacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateTransacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransacao[P]>
      : GetScalarType<T[P], AggregateTransacao[P]>
  }




  export type TransacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithAggregationInput | TransacaoOrderByWithAggregationInput[]
    by: TransacaoScalarFieldEnum[] | TransacaoScalarFieldEnum
    having?: TransacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransacaoCountAggregateInputType | true
    _avg?: TransacaoAvgAggregateInputType
    _sum?: TransacaoSumAggregateInputType
    _min?: TransacaoMinAggregateInputType
    _max?: TransacaoMaxAggregateInputType
  }

  export type TransacaoGroupByOutputType = {
    id: string
    descricao: string
    valor: Decimal
    tipo: $Enums.TipoTransacao
    data: Date
    status: $Enums.StatusTransacao
    observacoes: string | null
    tags: string[]
    recorrente: boolean
    recorrenciaId: string | null
    userId: string
    categoriaId: string | null
    contaId: string | null
    metaId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransacaoCountAggregateOutputType | null
    _avg: TransacaoAvgAggregateOutputType | null
    _sum: TransacaoSumAggregateOutputType | null
    _min: TransacaoMinAggregateOutputType | null
    _max: TransacaoMaxAggregateOutputType | null
  }

  type GetTransacaoGroupByPayload<T extends TransacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransacaoGroupByOutputType[P]>
            : GetScalarType<T[P], TransacaoGroupByOutputType[P]>
        }
      >
    >


  export type TransacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    valor?: boolean
    tipo?: boolean
    data?: boolean
    status?: boolean
    observacoes?: boolean
    tags?: boolean
    recorrente?: boolean
    recorrenciaId?: boolean
    userId?: boolean
    categoriaId?: boolean
    contaId?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | Transacao$categoriaArgs<ExtArgs>
    conta?: boolean | Transacao$contaArgs<ExtArgs>
    meta?: boolean | Transacao$metaArgs<ExtArgs>
    documentos?: boolean | Transacao$documentosArgs<ExtArgs>
    _count?: boolean | TransacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transacao"]>

  export type TransacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    valor?: boolean
    tipo?: boolean
    data?: boolean
    status?: boolean
    observacoes?: boolean
    tags?: boolean
    recorrente?: boolean
    recorrenciaId?: boolean
    userId?: boolean
    categoriaId?: boolean
    contaId?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | Transacao$categoriaArgs<ExtArgs>
    conta?: boolean | Transacao$contaArgs<ExtArgs>
    meta?: boolean | Transacao$metaArgs<ExtArgs>
  }, ExtArgs["result"]["transacao"]>

  export type TransacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    valor?: boolean
    tipo?: boolean
    data?: boolean
    status?: boolean
    observacoes?: boolean
    tags?: boolean
    recorrente?: boolean
    recorrenciaId?: boolean
    userId?: boolean
    categoriaId?: boolean
    contaId?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | Transacao$categoriaArgs<ExtArgs>
    conta?: boolean | Transacao$contaArgs<ExtArgs>
    meta?: boolean | Transacao$metaArgs<ExtArgs>
  }, ExtArgs["result"]["transacao"]>

  export type TransacaoSelectScalar = {
    id?: boolean
    descricao?: boolean
    valor?: boolean
    tipo?: boolean
    data?: boolean
    status?: boolean
    observacoes?: boolean
    tags?: boolean
    recorrente?: boolean
    recorrenciaId?: boolean
    userId?: boolean
    categoriaId?: boolean
    contaId?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "valor" | "tipo" | "data" | "status" | "observacoes" | "tags" | "recorrente" | "recorrenciaId" | "userId" | "categoriaId" | "contaId" | "metaId" | "createdAt" | "updatedAt", ExtArgs["result"]["transacao"]>
  export type TransacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | Transacao$categoriaArgs<ExtArgs>
    conta?: boolean | Transacao$contaArgs<ExtArgs>
    meta?: boolean | Transacao$metaArgs<ExtArgs>
    documentos?: boolean | Transacao$documentosArgs<ExtArgs>
    _count?: boolean | TransacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | Transacao$categoriaArgs<ExtArgs>
    conta?: boolean | Transacao$contaArgs<ExtArgs>
    meta?: boolean | Transacao$metaArgs<ExtArgs>
  }
  export type TransacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | Transacao$categoriaArgs<ExtArgs>
    conta?: boolean | Transacao$contaArgs<ExtArgs>
    meta?: boolean | Transacao$metaArgs<ExtArgs>
  }

  export type $TransacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transacao"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs> | null
      conta: Prisma.$ContaPayload<ExtArgs> | null
      meta: Prisma.$MetaPayload<ExtArgs> | null
      documentos: Prisma.$DocumentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      descricao: string
      valor: Prisma.Decimal
      tipo: $Enums.TipoTransacao
      data: Date
      status: $Enums.StatusTransacao
      observacoes: string | null
      tags: string[]
      recorrente: boolean
      recorrenciaId: string | null
      userId: string
      categoriaId: string | null
      contaId: string | null
      metaId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transacao"]>
    composites: {}
  }

  type TransacaoGetPayload<S extends boolean | null | undefined | TransacaoDefaultArgs> = $Result.GetResult<Prisma.$TransacaoPayload, S>

  type TransacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransacaoCountAggregateInputType | true
    }

  export interface TransacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transacao'], meta: { name: 'Transacao' } }
    /**
     * Find zero or one Transacao that matches the filter.
     * @param {TransacaoFindUniqueArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransacaoFindUniqueArgs>(args: SelectSubset<T, TransacaoFindUniqueArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransacaoFindUniqueOrThrowArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, TransacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindFirstArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransacaoFindFirstArgs>(args?: SelectSubset<T, TransacaoFindFirstArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindFirstOrThrowArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, TransacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transacaos
     * const transacaos = await prisma.transacao.findMany()
     * 
     * // Get first 10 Transacaos
     * const transacaos = await prisma.transacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transacaoWithIdOnly = await prisma.transacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransacaoFindManyArgs>(args?: SelectSubset<T, TransacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transacao.
     * @param {TransacaoCreateArgs} args - Arguments to create a Transacao.
     * @example
     * // Create one Transacao
     * const Transacao = await prisma.transacao.create({
     *   data: {
     *     // ... data to create a Transacao
     *   }
     * })
     * 
     */
    create<T extends TransacaoCreateArgs>(args: SelectSubset<T, TransacaoCreateArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transacaos.
     * @param {TransacaoCreateManyArgs} args - Arguments to create many Transacaos.
     * @example
     * // Create many Transacaos
     * const transacao = await prisma.transacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransacaoCreateManyArgs>(args?: SelectSubset<T, TransacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transacaos and returns the data saved in the database.
     * @param {TransacaoCreateManyAndReturnArgs} args - Arguments to create many Transacaos.
     * @example
     * // Create many Transacaos
     * const transacao = await prisma.transacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transacaos and only return the `id`
     * const transacaoWithIdOnly = await prisma.transacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, TransacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transacao.
     * @param {TransacaoDeleteArgs} args - Arguments to delete one Transacao.
     * @example
     * // Delete one Transacao
     * const Transacao = await prisma.transacao.delete({
     *   where: {
     *     // ... filter to delete one Transacao
     *   }
     * })
     * 
     */
    delete<T extends TransacaoDeleteArgs>(args: SelectSubset<T, TransacaoDeleteArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transacao.
     * @param {TransacaoUpdateArgs} args - Arguments to update one Transacao.
     * @example
     * // Update one Transacao
     * const transacao = await prisma.transacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransacaoUpdateArgs>(args: SelectSubset<T, TransacaoUpdateArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transacaos.
     * @param {TransacaoDeleteManyArgs} args - Arguments to filter Transacaos to delete.
     * @example
     * // Delete a few Transacaos
     * const { count } = await prisma.transacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransacaoDeleteManyArgs>(args?: SelectSubset<T, TransacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transacaos
     * const transacao = await prisma.transacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransacaoUpdateManyArgs>(args: SelectSubset<T, TransacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transacaos and returns the data updated in the database.
     * @param {TransacaoUpdateManyAndReturnArgs} args - Arguments to update many Transacaos.
     * @example
     * // Update many Transacaos
     * const transacao = await prisma.transacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transacaos and only return the `id`
     * const transacaoWithIdOnly = await prisma.transacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, TransacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transacao.
     * @param {TransacaoUpsertArgs} args - Arguments to update or create a Transacao.
     * @example
     * // Update or create a Transacao
     * const transacao = await prisma.transacao.upsert({
     *   create: {
     *     // ... data to create a Transacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transacao we want to update
     *   }
     * })
     */
    upsert<T extends TransacaoUpsertArgs>(args: SelectSubset<T, TransacaoUpsertArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoCountArgs} args - Arguments to filter Transacaos to count.
     * @example
     * // Count the number of Transacaos
     * const count = await prisma.transacao.count({
     *   where: {
     *     // ... the filter for the Transacaos we want to count
     *   }
     * })
    **/
    count<T extends TransacaoCountArgs>(
      args?: Subset<T, TransacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransacaoAggregateArgs>(args: Subset<T, TransacaoAggregateArgs>): Prisma.PrismaPromise<GetTransacaoAggregateType<T>>

    /**
     * Group by Transacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransacaoGroupByArgs['orderBy'] }
        : { orderBy?: TransacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transacao model
   */
  readonly fields: TransacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends Transacao$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, Transacao$categoriaArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    conta<T extends Transacao$contaArgs<ExtArgs> = {}>(args?: Subset<T, Transacao$contaArgs<ExtArgs>>): Prisma__ContaClient<$Result.GetResult<Prisma.$ContaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    meta<T extends Transacao$metaArgs<ExtArgs> = {}>(args?: Subset<T, Transacao$metaArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    documentos<T extends Transacao$documentosArgs<ExtArgs> = {}>(args?: Subset<T, Transacao$documentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transacao model
   */
  interface TransacaoFieldRefs {
    readonly id: FieldRef<"Transacao", 'String'>
    readonly descricao: FieldRef<"Transacao", 'String'>
    readonly valor: FieldRef<"Transacao", 'Decimal'>
    readonly tipo: FieldRef<"Transacao", 'TipoTransacao'>
    readonly data: FieldRef<"Transacao", 'DateTime'>
    readonly status: FieldRef<"Transacao", 'StatusTransacao'>
    readonly observacoes: FieldRef<"Transacao", 'String'>
    readonly tags: FieldRef<"Transacao", 'String[]'>
    readonly recorrente: FieldRef<"Transacao", 'Boolean'>
    readonly recorrenciaId: FieldRef<"Transacao", 'String'>
    readonly userId: FieldRef<"Transacao", 'String'>
    readonly categoriaId: FieldRef<"Transacao", 'String'>
    readonly contaId: FieldRef<"Transacao", 'String'>
    readonly metaId: FieldRef<"Transacao", 'String'>
    readonly createdAt: FieldRef<"Transacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Transacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transacao findUnique
   */
  export type TransacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao findUniqueOrThrow
   */
  export type TransacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao findFirst
   */
  export type TransacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacaos.
     */
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao findFirstOrThrow
   */
  export type TransacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacaos.
     */
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao findMany
   */
  export type TransacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacaos to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao create
   */
  export type TransacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Transacao.
     */
    data: XOR<TransacaoCreateInput, TransacaoUncheckedCreateInput>
  }

  /**
   * Transacao createMany
   */
  export type TransacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transacaos.
     */
    data: TransacaoCreateManyInput | TransacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transacao createManyAndReturn
   */
  export type TransacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Transacaos.
     */
    data: TransacaoCreateManyInput | TransacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transacao update
   */
  export type TransacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Transacao.
     */
    data: XOR<TransacaoUpdateInput, TransacaoUncheckedUpdateInput>
    /**
     * Choose, which Transacao to update.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao updateMany
   */
  export type TransacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transacaos.
     */
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyInput>
    /**
     * Filter which Transacaos to update
     */
    where?: TransacaoWhereInput
    /**
     * Limit how many Transacaos to update.
     */
    limit?: number
  }

  /**
   * Transacao updateManyAndReturn
   */
  export type TransacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * The data used to update Transacaos.
     */
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyInput>
    /**
     * Filter which Transacaos to update
     */
    where?: TransacaoWhereInput
    /**
     * Limit how many Transacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transacao upsert
   */
  export type TransacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Transacao to update in case it exists.
     */
    where: TransacaoWhereUniqueInput
    /**
     * In case the Transacao found by the `where` argument doesn't exist, create a new Transacao with this data.
     */
    create: XOR<TransacaoCreateInput, TransacaoUncheckedCreateInput>
    /**
     * In case the Transacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransacaoUpdateInput, TransacaoUncheckedUpdateInput>
  }

  /**
   * Transacao delete
   */
  export type TransacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter which Transacao to delete.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao deleteMany
   */
  export type TransacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacaos to delete
     */
    where?: TransacaoWhereInput
    /**
     * Limit how many Transacaos to delete.
     */
    limit?: number
  }

  /**
   * Transacao.categoria
   */
  export type Transacao$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
  }

  /**
   * Transacao.conta
   */
  export type Transacao$contaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conta
     */
    select?: ContaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conta
     */
    omit?: ContaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaInclude<ExtArgs> | null
    where?: ContaWhereInput
  }

  /**
   * Transacao.meta
   */
  export type Transacao$metaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    where?: MetaWhereInput
  }

  /**
   * Transacao.documentos
   */
  export type Transacao$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    cursor?: DocumentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Transacao without action
   */
  export type TransacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    orcamentoPadrao: Decimal | null
  }

  export type CategoriaSumAggregateOutputType = {
    orcamentoPadrao: Decimal | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    tipo: $Enums.CategoriaTipo | null
    cor: string | null
    icone: string | null
    orcamentoPadrao: Decimal | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    tipo: $Enums.CategoriaTipo | null
    cor: string | null
    icone: string | null
    orcamentoPadrao: Decimal | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    tipo: number
    cor: number
    icone: number
    orcamentoPadrao: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    orcamentoPadrao?: true
  }

  export type CategoriaSumAggregateInputType = {
    orcamentoPadrao?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    tipo?: true
    cor?: true
    icone?: true
    orcamentoPadrao?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    tipo?: true
    cor?: true
    icone?: true
    orcamentoPadrao?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    tipo?: true
    cor?: true
    icone?: true
    orcamentoPadrao?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: string
    nome: string
    descricao: string | null
    tipo: $Enums.CategoriaTipo
    cor: string
    icone: string
    orcamentoPadrao: Decimal | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    tipo?: boolean
    cor?: boolean
    icone?: boolean
    orcamentoPadrao?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transacoes?: boolean | Categoria$transacoesArgs<ExtArgs>
    orcamentos?: boolean | Categoria$orcamentosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    tipo?: boolean
    cor?: boolean
    icone?: boolean
    orcamentoPadrao?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    tipo?: boolean
    cor?: boolean
    icone?: boolean
    orcamentoPadrao?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    tipo?: boolean
    cor?: boolean
    icone?: boolean
    orcamentoPadrao?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "tipo" | "cor" | "icone" | "orcamentoPadrao" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transacoes?: boolean | Categoria$transacoesArgs<ExtArgs>
    orcamentos?: boolean | Categoria$orcamentosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transacoes: Prisma.$TransacaoPayload<ExtArgs>[]
      orcamentos: Prisma.$OrcamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string | null
      tipo: $Enums.CategoriaTipo
      cor: string
      icone: string
      orcamentoPadrao: Prisma.Decimal | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transacoes<T extends Categoria$transacoesArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$transacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orcamentos<T extends Categoria$orcamentosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$orcamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'String'>
    readonly nome: FieldRef<"Categoria", 'String'>
    readonly descricao: FieldRef<"Categoria", 'String'>
    readonly tipo: FieldRef<"Categoria", 'CategoriaTipo'>
    readonly cor: FieldRef<"Categoria", 'String'>
    readonly icone: FieldRef<"Categoria", 'String'>
    readonly orcamentoPadrao: FieldRef<"Categoria", 'Decimal'>
    readonly userId: FieldRef<"Categoria", 'String'>
    readonly createdAt: FieldRef<"Categoria", 'DateTime'>
    readonly updatedAt: FieldRef<"Categoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.transacoes
   */
  export type Categoria$transacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    cursor?: TransacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Categoria.orcamentos
   */
  export type Categoria$orcamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    where?: OrcamentoWhereInput
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    cursor?: OrcamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrcamentoScalarFieldEnum | OrcamentoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Conta
   */

  export type AggregateConta = {
    _count: ContaCountAggregateOutputType | null
    _avg: ContaAvgAggregateOutputType | null
    _sum: ContaSumAggregateOutputType | null
    _min: ContaMinAggregateOutputType | null
    _max: ContaMaxAggregateOutputType | null
  }

  export type ContaAvgAggregateOutputType = {
    saldoInicial: Decimal | null
    saldoAtual: Decimal | null
  }

  export type ContaSumAggregateOutputType = {
    saldoInicial: Decimal | null
    saldoAtual: Decimal | null
  }

  export type ContaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    instituicao: string | null
    tipo: string | null
    saldoInicial: Decimal | null
    saldoAtual: Decimal | null
    cor: string | null
    ativo: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    instituicao: string | null
    tipo: string | null
    saldoInicial: Decimal | null
    saldoAtual: Decimal | null
    cor: string | null
    ativo: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContaCountAggregateOutputType = {
    id: number
    nome: number
    instituicao: number
    tipo: number
    saldoInicial: number
    saldoAtual: number
    cor: number
    ativo: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContaAvgAggregateInputType = {
    saldoInicial?: true
    saldoAtual?: true
  }

  export type ContaSumAggregateInputType = {
    saldoInicial?: true
    saldoAtual?: true
  }

  export type ContaMinAggregateInputType = {
    id?: true
    nome?: true
    instituicao?: true
    tipo?: true
    saldoInicial?: true
    saldoAtual?: true
    cor?: true
    ativo?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContaMaxAggregateInputType = {
    id?: true
    nome?: true
    instituicao?: true
    tipo?: true
    saldoInicial?: true
    saldoAtual?: true
    cor?: true
    ativo?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContaCountAggregateInputType = {
    id?: true
    nome?: true
    instituicao?: true
    tipo?: true
    saldoInicial?: true
    saldoAtual?: true
    cor?: true
    ativo?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conta to aggregate.
     */
    where?: ContaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contas to fetch.
     */
    orderBy?: ContaOrderByWithRelationInput | ContaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contas
    **/
    _count?: true | ContaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContaMaxAggregateInputType
  }

  export type GetContaAggregateType<T extends ContaAggregateArgs> = {
        [P in keyof T & keyof AggregateConta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConta[P]>
      : GetScalarType<T[P], AggregateConta[P]>
  }




  export type ContaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContaWhereInput
    orderBy?: ContaOrderByWithAggregationInput | ContaOrderByWithAggregationInput[]
    by: ContaScalarFieldEnum[] | ContaScalarFieldEnum
    having?: ContaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContaCountAggregateInputType | true
    _avg?: ContaAvgAggregateInputType
    _sum?: ContaSumAggregateInputType
    _min?: ContaMinAggregateInputType
    _max?: ContaMaxAggregateInputType
  }

  export type ContaGroupByOutputType = {
    id: string
    nome: string
    instituicao: string
    tipo: string
    saldoInicial: Decimal
    saldoAtual: Decimal
    cor: string
    ativo: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ContaCountAggregateOutputType | null
    _avg: ContaAvgAggregateOutputType | null
    _sum: ContaSumAggregateOutputType | null
    _min: ContaMinAggregateOutputType | null
    _max: ContaMaxAggregateOutputType | null
  }

  type GetContaGroupByPayload<T extends ContaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContaGroupByOutputType[P]>
            : GetScalarType<T[P], ContaGroupByOutputType[P]>
        }
      >
    >


  export type ContaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    instituicao?: boolean
    tipo?: boolean
    saldoInicial?: boolean
    saldoAtual?: boolean
    cor?: boolean
    ativo?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transacoes?: boolean | Conta$transacoesArgs<ExtArgs>
    _count?: boolean | ContaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conta"]>

  export type ContaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    instituicao?: boolean
    tipo?: boolean
    saldoInicial?: boolean
    saldoAtual?: boolean
    cor?: boolean
    ativo?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conta"]>

  export type ContaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    instituicao?: boolean
    tipo?: boolean
    saldoInicial?: boolean
    saldoAtual?: boolean
    cor?: boolean
    ativo?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conta"]>

  export type ContaSelectScalar = {
    id?: boolean
    nome?: boolean
    instituicao?: boolean
    tipo?: boolean
    saldoInicial?: boolean
    saldoAtual?: boolean
    cor?: boolean
    ativo?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "instituicao" | "tipo" | "saldoInicial" | "saldoAtual" | "cor" | "ativo" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["conta"]>
  export type ContaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transacoes?: boolean | Conta$transacoesArgs<ExtArgs>
    _count?: boolean | ContaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conta"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transacoes: Prisma.$TransacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      instituicao: string
      tipo: string
      saldoInicial: Prisma.Decimal
      saldoAtual: Prisma.Decimal
      cor: string
      ativo: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conta"]>
    composites: {}
  }

  type ContaGetPayload<S extends boolean | null | undefined | ContaDefaultArgs> = $Result.GetResult<Prisma.$ContaPayload, S>

  type ContaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContaCountAggregateInputType | true
    }

  export interface ContaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conta'], meta: { name: 'Conta' } }
    /**
     * Find zero or one Conta that matches the filter.
     * @param {ContaFindUniqueArgs} args - Arguments to find a Conta
     * @example
     * // Get one Conta
     * const conta = await prisma.conta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContaFindUniqueArgs>(args: SelectSubset<T, ContaFindUniqueArgs<ExtArgs>>): Prisma__ContaClient<$Result.GetResult<Prisma.$ContaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContaFindUniqueOrThrowArgs} args - Arguments to find a Conta
     * @example
     * // Get one Conta
     * const conta = await prisma.conta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContaFindUniqueOrThrowArgs>(args: SelectSubset<T, ContaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContaClient<$Result.GetResult<Prisma.$ContaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaFindFirstArgs} args - Arguments to find a Conta
     * @example
     * // Get one Conta
     * const conta = await prisma.conta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContaFindFirstArgs>(args?: SelectSubset<T, ContaFindFirstArgs<ExtArgs>>): Prisma__ContaClient<$Result.GetResult<Prisma.$ContaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaFindFirstOrThrowArgs} args - Arguments to find a Conta
     * @example
     * // Get one Conta
     * const conta = await prisma.conta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContaFindFirstOrThrowArgs>(args?: SelectSubset<T, ContaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContaClient<$Result.GetResult<Prisma.$ContaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contas
     * const contas = await prisma.conta.findMany()
     * 
     * // Get first 10 Contas
     * const contas = await prisma.conta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contaWithIdOnly = await prisma.conta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContaFindManyArgs>(args?: SelectSubset<T, ContaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conta.
     * @param {ContaCreateArgs} args - Arguments to create a Conta.
     * @example
     * // Create one Conta
     * const Conta = await prisma.conta.create({
     *   data: {
     *     // ... data to create a Conta
     *   }
     * })
     * 
     */
    create<T extends ContaCreateArgs>(args: SelectSubset<T, ContaCreateArgs<ExtArgs>>): Prisma__ContaClient<$Result.GetResult<Prisma.$ContaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contas.
     * @param {ContaCreateManyArgs} args - Arguments to create many Contas.
     * @example
     * // Create many Contas
     * const conta = await prisma.conta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContaCreateManyArgs>(args?: SelectSubset<T, ContaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contas and returns the data saved in the database.
     * @param {ContaCreateManyAndReturnArgs} args - Arguments to create many Contas.
     * @example
     * // Create many Contas
     * const conta = await prisma.conta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contas and only return the `id`
     * const contaWithIdOnly = await prisma.conta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContaCreateManyAndReturnArgs>(args?: SelectSubset<T, ContaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conta.
     * @param {ContaDeleteArgs} args - Arguments to delete one Conta.
     * @example
     * // Delete one Conta
     * const Conta = await prisma.conta.delete({
     *   where: {
     *     // ... filter to delete one Conta
     *   }
     * })
     * 
     */
    delete<T extends ContaDeleteArgs>(args: SelectSubset<T, ContaDeleteArgs<ExtArgs>>): Prisma__ContaClient<$Result.GetResult<Prisma.$ContaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conta.
     * @param {ContaUpdateArgs} args - Arguments to update one Conta.
     * @example
     * // Update one Conta
     * const conta = await prisma.conta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContaUpdateArgs>(args: SelectSubset<T, ContaUpdateArgs<ExtArgs>>): Prisma__ContaClient<$Result.GetResult<Prisma.$ContaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contas.
     * @param {ContaDeleteManyArgs} args - Arguments to filter Contas to delete.
     * @example
     * // Delete a few Contas
     * const { count } = await prisma.conta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContaDeleteManyArgs>(args?: SelectSubset<T, ContaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contas
     * const conta = await prisma.conta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContaUpdateManyArgs>(args: SelectSubset<T, ContaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contas and returns the data updated in the database.
     * @param {ContaUpdateManyAndReturnArgs} args - Arguments to update many Contas.
     * @example
     * // Update many Contas
     * const conta = await prisma.conta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contas and only return the `id`
     * const contaWithIdOnly = await prisma.conta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContaUpdateManyAndReturnArgs>(args: SelectSubset<T, ContaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conta.
     * @param {ContaUpsertArgs} args - Arguments to update or create a Conta.
     * @example
     * // Update or create a Conta
     * const conta = await prisma.conta.upsert({
     *   create: {
     *     // ... data to create a Conta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conta we want to update
     *   }
     * })
     */
    upsert<T extends ContaUpsertArgs>(args: SelectSubset<T, ContaUpsertArgs<ExtArgs>>): Prisma__ContaClient<$Result.GetResult<Prisma.$ContaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaCountArgs} args - Arguments to filter Contas to count.
     * @example
     * // Count the number of Contas
     * const count = await prisma.conta.count({
     *   where: {
     *     // ... the filter for the Contas we want to count
     *   }
     * })
    **/
    count<T extends ContaCountArgs>(
      args?: Subset<T, ContaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContaAggregateArgs>(args: Subset<T, ContaAggregateArgs>): Prisma.PrismaPromise<GetContaAggregateType<T>>

    /**
     * Group by Conta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContaGroupByArgs['orderBy'] }
        : { orderBy?: ContaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conta model
   */
  readonly fields: ContaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transacoes<T extends Conta$transacoesArgs<ExtArgs> = {}>(args?: Subset<T, Conta$transacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conta model
   */
  interface ContaFieldRefs {
    readonly id: FieldRef<"Conta", 'String'>
    readonly nome: FieldRef<"Conta", 'String'>
    readonly instituicao: FieldRef<"Conta", 'String'>
    readonly tipo: FieldRef<"Conta", 'String'>
    readonly saldoInicial: FieldRef<"Conta", 'Decimal'>
    readonly saldoAtual: FieldRef<"Conta", 'Decimal'>
    readonly cor: FieldRef<"Conta", 'String'>
    readonly ativo: FieldRef<"Conta", 'Boolean'>
    readonly userId: FieldRef<"Conta", 'String'>
    readonly createdAt: FieldRef<"Conta", 'DateTime'>
    readonly updatedAt: FieldRef<"Conta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conta findUnique
   */
  export type ContaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conta
     */
    select?: ContaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conta
     */
    omit?: ContaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaInclude<ExtArgs> | null
    /**
     * Filter, which Conta to fetch.
     */
    where: ContaWhereUniqueInput
  }

  /**
   * Conta findUniqueOrThrow
   */
  export type ContaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conta
     */
    select?: ContaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conta
     */
    omit?: ContaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaInclude<ExtArgs> | null
    /**
     * Filter, which Conta to fetch.
     */
    where: ContaWhereUniqueInput
  }

  /**
   * Conta findFirst
   */
  export type ContaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conta
     */
    select?: ContaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conta
     */
    omit?: ContaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaInclude<ExtArgs> | null
    /**
     * Filter, which Conta to fetch.
     */
    where?: ContaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contas to fetch.
     */
    orderBy?: ContaOrderByWithRelationInput | ContaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contas.
     */
    cursor?: ContaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contas.
     */
    distinct?: ContaScalarFieldEnum | ContaScalarFieldEnum[]
  }

  /**
   * Conta findFirstOrThrow
   */
  export type ContaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conta
     */
    select?: ContaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conta
     */
    omit?: ContaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaInclude<ExtArgs> | null
    /**
     * Filter, which Conta to fetch.
     */
    where?: ContaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contas to fetch.
     */
    orderBy?: ContaOrderByWithRelationInput | ContaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contas.
     */
    cursor?: ContaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contas.
     */
    distinct?: ContaScalarFieldEnum | ContaScalarFieldEnum[]
  }

  /**
   * Conta findMany
   */
  export type ContaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conta
     */
    select?: ContaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conta
     */
    omit?: ContaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaInclude<ExtArgs> | null
    /**
     * Filter, which Contas to fetch.
     */
    where?: ContaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contas to fetch.
     */
    orderBy?: ContaOrderByWithRelationInput | ContaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contas.
     */
    cursor?: ContaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contas.
     */
    skip?: number
    distinct?: ContaScalarFieldEnum | ContaScalarFieldEnum[]
  }

  /**
   * Conta create
   */
  export type ContaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conta
     */
    select?: ContaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conta
     */
    omit?: ContaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaInclude<ExtArgs> | null
    /**
     * The data needed to create a Conta.
     */
    data: XOR<ContaCreateInput, ContaUncheckedCreateInput>
  }

  /**
   * Conta createMany
   */
  export type ContaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contas.
     */
    data: ContaCreateManyInput | ContaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conta createManyAndReturn
   */
  export type ContaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conta
     */
    select?: ContaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conta
     */
    omit?: ContaOmit<ExtArgs> | null
    /**
     * The data used to create many Contas.
     */
    data: ContaCreateManyInput | ContaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conta update
   */
  export type ContaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conta
     */
    select?: ContaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conta
     */
    omit?: ContaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaInclude<ExtArgs> | null
    /**
     * The data needed to update a Conta.
     */
    data: XOR<ContaUpdateInput, ContaUncheckedUpdateInput>
    /**
     * Choose, which Conta to update.
     */
    where: ContaWhereUniqueInput
  }

  /**
   * Conta updateMany
   */
  export type ContaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contas.
     */
    data: XOR<ContaUpdateManyMutationInput, ContaUncheckedUpdateManyInput>
    /**
     * Filter which Contas to update
     */
    where?: ContaWhereInput
    /**
     * Limit how many Contas to update.
     */
    limit?: number
  }

  /**
   * Conta updateManyAndReturn
   */
  export type ContaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conta
     */
    select?: ContaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conta
     */
    omit?: ContaOmit<ExtArgs> | null
    /**
     * The data used to update Contas.
     */
    data: XOR<ContaUpdateManyMutationInput, ContaUncheckedUpdateManyInput>
    /**
     * Filter which Contas to update
     */
    where?: ContaWhereInput
    /**
     * Limit how many Contas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conta upsert
   */
  export type ContaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conta
     */
    select?: ContaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conta
     */
    omit?: ContaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaInclude<ExtArgs> | null
    /**
     * The filter to search for the Conta to update in case it exists.
     */
    where: ContaWhereUniqueInput
    /**
     * In case the Conta found by the `where` argument doesn't exist, create a new Conta with this data.
     */
    create: XOR<ContaCreateInput, ContaUncheckedCreateInput>
    /**
     * In case the Conta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContaUpdateInput, ContaUncheckedUpdateInput>
  }

  /**
   * Conta delete
   */
  export type ContaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conta
     */
    select?: ContaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conta
     */
    omit?: ContaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaInclude<ExtArgs> | null
    /**
     * Filter which Conta to delete.
     */
    where: ContaWhereUniqueInput
  }

  /**
   * Conta deleteMany
   */
  export type ContaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contas to delete
     */
    where?: ContaWhereInput
    /**
     * Limit how many Contas to delete.
     */
    limit?: number
  }

  /**
   * Conta.transacoes
   */
  export type Conta$transacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    cursor?: TransacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Conta without action
   */
  export type ContaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conta
     */
    select?: ContaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conta
     */
    omit?: ContaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaInclude<ExtArgs> | null
  }


  /**
   * Model Meta
   */

  export type AggregateMeta = {
    _count: MetaCountAggregateOutputType | null
    _avg: MetaAvgAggregateOutputType | null
    _sum: MetaSumAggregateOutputType | null
    _min: MetaMinAggregateOutputType | null
    _max: MetaMaxAggregateOutputType | null
  }

  export type MetaAvgAggregateOutputType = {
    valorAlvo: Decimal | null
    valorAtual: Decimal | null
  }

  export type MetaSumAggregateOutputType = {
    valorAlvo: Decimal | null
    valorAtual: Decimal | null
  }

  export type MetaMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    valorAlvo: Decimal | null
    valorAtual: Decimal | null
    dataInicio: Date | null
    dataFim: Date | null
    periodicidade: $Enums.PeriodicidadeMeta | null
    cor: string | null
    concluida: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetaMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    valorAlvo: Decimal | null
    valorAtual: Decimal | null
    dataInicio: Date | null
    dataFim: Date | null
    periodicidade: $Enums.PeriodicidadeMeta | null
    cor: string | null
    concluida: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetaCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    valorAlvo: number
    valorAtual: number
    dataInicio: number
    dataFim: number
    periodicidade: number
    cor: number
    concluida: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetaAvgAggregateInputType = {
    valorAlvo?: true
    valorAtual?: true
  }

  export type MetaSumAggregateInputType = {
    valorAlvo?: true
    valorAtual?: true
  }

  export type MetaMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    valorAlvo?: true
    valorAtual?: true
    dataInicio?: true
    dataFim?: true
    periodicidade?: true
    cor?: true
    concluida?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetaMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    valorAlvo?: true
    valorAtual?: true
    dataInicio?: true
    dataFim?: true
    periodicidade?: true
    cor?: true
    concluida?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetaCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    valorAlvo?: true
    valorAtual?: true
    dataInicio?: true
    dataFim?: true
    periodicidade?: true
    cor?: true
    concluida?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meta to aggregate.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metas
    **/
    _count?: true | MetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaMaxAggregateInputType
  }

  export type GetMetaAggregateType<T extends MetaAggregateArgs> = {
        [P in keyof T & keyof AggregateMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeta[P]>
      : GetScalarType<T[P], AggregateMeta[P]>
  }




  export type MetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaWhereInput
    orderBy?: MetaOrderByWithAggregationInput | MetaOrderByWithAggregationInput[]
    by: MetaScalarFieldEnum[] | MetaScalarFieldEnum
    having?: MetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaCountAggregateInputType | true
    _avg?: MetaAvgAggregateInputType
    _sum?: MetaSumAggregateInputType
    _min?: MetaMinAggregateInputType
    _max?: MetaMaxAggregateInputType
  }

  export type MetaGroupByOutputType = {
    id: string
    titulo: string
    descricao: string | null
    valorAlvo: Decimal
    valorAtual: Decimal
    dataInicio: Date
    dataFim: Date
    periodicidade: $Enums.PeriodicidadeMeta
    cor: string
    concluida: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: MetaCountAggregateOutputType | null
    _avg: MetaAvgAggregateOutputType | null
    _sum: MetaSumAggregateOutputType | null
    _min: MetaMinAggregateOutputType | null
    _max: MetaMaxAggregateOutputType | null
  }

  type GetMetaGroupByPayload<T extends MetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaGroupByOutputType[P]>
            : GetScalarType<T[P], MetaGroupByOutputType[P]>
        }
      >
    >


  export type MetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    valorAlvo?: boolean
    valorAtual?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    periodicidade?: boolean
    cor?: boolean
    concluida?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transacoes?: boolean | Meta$transacoesArgs<ExtArgs>
    _count?: boolean | MetaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    valorAlvo?: boolean
    valorAtual?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    periodicidade?: boolean
    cor?: boolean
    concluida?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    valorAlvo?: boolean
    valorAtual?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    periodicidade?: boolean
    cor?: boolean
    concluida?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    valorAlvo?: boolean
    valorAtual?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    periodicidade?: boolean
    cor?: boolean
    concluida?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "valorAlvo" | "valorAtual" | "dataInicio" | "dataFim" | "periodicidade" | "cor" | "concluida" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["meta"]>
  export type MetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transacoes?: boolean | Meta$transacoesArgs<ExtArgs>
    _count?: boolean | MetaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MetaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meta"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transacoes: Prisma.$TransacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string | null
      valorAlvo: Prisma.Decimal
      valorAtual: Prisma.Decimal
      dataInicio: Date
      dataFim: Date
      periodicidade: $Enums.PeriodicidadeMeta
      cor: string
      concluida: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meta"]>
    composites: {}
  }

  type MetaGetPayload<S extends boolean | null | undefined | MetaDefaultArgs> = $Result.GetResult<Prisma.$MetaPayload, S>

  type MetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetaCountAggregateInputType | true
    }

  export interface MetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meta'], meta: { name: 'Meta' } }
    /**
     * Find zero or one Meta that matches the filter.
     * @param {MetaFindUniqueArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetaFindUniqueArgs>(args: SelectSubset<T, MetaFindUniqueArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetaFindUniqueOrThrowArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetaFindUniqueOrThrowArgs>(args: SelectSubset<T, MetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindFirstArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetaFindFirstArgs>(args?: SelectSubset<T, MetaFindFirstArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindFirstOrThrowArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetaFindFirstOrThrowArgs>(args?: SelectSubset<T, MetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metas
     * const metas = await prisma.meta.findMany()
     * 
     * // Get first 10 Metas
     * const metas = await prisma.meta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metaWithIdOnly = await prisma.meta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetaFindManyArgs>(args?: SelectSubset<T, MetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meta.
     * @param {MetaCreateArgs} args - Arguments to create a Meta.
     * @example
     * // Create one Meta
     * const Meta = await prisma.meta.create({
     *   data: {
     *     // ... data to create a Meta
     *   }
     * })
     * 
     */
    create<T extends MetaCreateArgs>(args: SelectSubset<T, MetaCreateArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metas.
     * @param {MetaCreateManyArgs} args - Arguments to create many Metas.
     * @example
     * // Create many Metas
     * const meta = await prisma.meta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetaCreateManyArgs>(args?: SelectSubset<T, MetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metas and returns the data saved in the database.
     * @param {MetaCreateManyAndReturnArgs} args - Arguments to create many Metas.
     * @example
     * // Create many Metas
     * const meta = await prisma.meta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metas and only return the `id`
     * const metaWithIdOnly = await prisma.meta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetaCreateManyAndReturnArgs>(args?: SelectSubset<T, MetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meta.
     * @param {MetaDeleteArgs} args - Arguments to delete one Meta.
     * @example
     * // Delete one Meta
     * const Meta = await prisma.meta.delete({
     *   where: {
     *     // ... filter to delete one Meta
     *   }
     * })
     * 
     */
    delete<T extends MetaDeleteArgs>(args: SelectSubset<T, MetaDeleteArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meta.
     * @param {MetaUpdateArgs} args - Arguments to update one Meta.
     * @example
     * // Update one Meta
     * const meta = await prisma.meta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetaUpdateArgs>(args: SelectSubset<T, MetaUpdateArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metas.
     * @param {MetaDeleteManyArgs} args - Arguments to filter Metas to delete.
     * @example
     * // Delete a few Metas
     * const { count } = await prisma.meta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetaDeleteManyArgs>(args?: SelectSubset<T, MetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metas
     * const meta = await prisma.meta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetaUpdateManyArgs>(args: SelectSubset<T, MetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metas and returns the data updated in the database.
     * @param {MetaUpdateManyAndReturnArgs} args - Arguments to update many Metas.
     * @example
     * // Update many Metas
     * const meta = await prisma.meta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metas and only return the `id`
     * const metaWithIdOnly = await prisma.meta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetaUpdateManyAndReturnArgs>(args: SelectSubset<T, MetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meta.
     * @param {MetaUpsertArgs} args - Arguments to update or create a Meta.
     * @example
     * // Update or create a Meta
     * const meta = await prisma.meta.upsert({
     *   create: {
     *     // ... data to create a Meta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meta we want to update
     *   }
     * })
     */
    upsert<T extends MetaUpsertArgs>(args: SelectSubset<T, MetaUpsertArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaCountArgs} args - Arguments to filter Metas to count.
     * @example
     * // Count the number of Metas
     * const count = await prisma.meta.count({
     *   where: {
     *     // ... the filter for the Metas we want to count
     *   }
     * })
    **/
    count<T extends MetaCountArgs>(
      args?: Subset<T, MetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetaAggregateArgs>(args: Subset<T, MetaAggregateArgs>): Prisma.PrismaPromise<GetMetaAggregateType<T>>

    /**
     * Group by Meta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaGroupByArgs['orderBy'] }
        : { orderBy?: MetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meta model
   */
  readonly fields: MetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transacoes<T extends Meta$transacoesArgs<ExtArgs> = {}>(args?: Subset<T, Meta$transacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meta model
   */
  interface MetaFieldRefs {
    readonly id: FieldRef<"Meta", 'String'>
    readonly titulo: FieldRef<"Meta", 'String'>
    readonly descricao: FieldRef<"Meta", 'String'>
    readonly valorAlvo: FieldRef<"Meta", 'Decimal'>
    readonly valorAtual: FieldRef<"Meta", 'Decimal'>
    readonly dataInicio: FieldRef<"Meta", 'DateTime'>
    readonly dataFim: FieldRef<"Meta", 'DateTime'>
    readonly periodicidade: FieldRef<"Meta", 'PeriodicidadeMeta'>
    readonly cor: FieldRef<"Meta", 'String'>
    readonly concluida: FieldRef<"Meta", 'Boolean'>
    readonly userId: FieldRef<"Meta", 'String'>
    readonly createdAt: FieldRef<"Meta", 'DateTime'>
    readonly updatedAt: FieldRef<"Meta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meta findUnique
   */
  export type MetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta findUniqueOrThrow
   */
  export type MetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta findFirst
   */
  export type MetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metas.
     */
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta findFirstOrThrow
   */
  export type MetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metas.
     */
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta findMany
   */
  export type MetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Metas to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta create
   */
  export type MetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * The data needed to create a Meta.
     */
    data: XOR<MetaCreateInput, MetaUncheckedCreateInput>
  }

  /**
   * Meta createMany
   */
  export type MetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metas.
     */
    data: MetaCreateManyInput | MetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meta createManyAndReturn
   */
  export type MetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data used to create many Metas.
     */
    data: MetaCreateManyInput | MetaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meta update
   */
  export type MetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * The data needed to update a Meta.
     */
    data: XOR<MetaUpdateInput, MetaUncheckedUpdateInput>
    /**
     * Choose, which Meta to update.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta updateMany
   */
  export type MetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metas.
     */
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyInput>
    /**
     * Filter which Metas to update
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to update.
     */
    limit?: number
  }

  /**
   * Meta updateManyAndReturn
   */
  export type MetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data used to update Metas.
     */
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyInput>
    /**
     * Filter which Metas to update
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meta upsert
   */
  export type MetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * The filter to search for the Meta to update in case it exists.
     */
    where: MetaWhereUniqueInput
    /**
     * In case the Meta found by the `where` argument doesn't exist, create a new Meta with this data.
     */
    create: XOR<MetaCreateInput, MetaUncheckedCreateInput>
    /**
     * In case the Meta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetaUpdateInput, MetaUncheckedUpdateInput>
  }

  /**
   * Meta delete
   */
  export type MetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter which Meta to delete.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta deleteMany
   */
  export type MetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metas to delete
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to delete.
     */
    limit?: number
  }

  /**
   * Meta.transacoes
   */
  export type Meta$transacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    cursor?: TransacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Meta without action
   */
  export type MetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
  }


  /**
   * Model Orcamento
   */

  export type AggregateOrcamento = {
    _count: OrcamentoCountAggregateOutputType | null
    _avg: OrcamentoAvgAggregateOutputType | null
    _sum: OrcamentoSumAggregateOutputType | null
    _min: OrcamentoMinAggregateOutputType | null
    _max: OrcamentoMaxAggregateOutputType | null
  }

  export type OrcamentoAvgAggregateOutputType = {
    mes: number | null
    ano: number | null
    valor: Decimal | null
    valorUtilizado: Decimal | null
  }

  export type OrcamentoSumAggregateOutputType = {
    mes: number | null
    ano: number | null
    valor: Decimal | null
    valorUtilizado: Decimal | null
  }

  export type OrcamentoMinAggregateOutputType = {
    id: string | null
    mes: number | null
    ano: number | null
    valor: Decimal | null
    valorUtilizado: Decimal | null
    userId: string | null
    categoriaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrcamentoMaxAggregateOutputType = {
    id: string | null
    mes: number | null
    ano: number | null
    valor: Decimal | null
    valorUtilizado: Decimal | null
    userId: string | null
    categoriaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrcamentoCountAggregateOutputType = {
    id: number
    mes: number
    ano: number
    valor: number
    valorUtilizado: number
    userId: number
    categoriaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrcamentoAvgAggregateInputType = {
    mes?: true
    ano?: true
    valor?: true
    valorUtilizado?: true
  }

  export type OrcamentoSumAggregateInputType = {
    mes?: true
    ano?: true
    valor?: true
    valorUtilizado?: true
  }

  export type OrcamentoMinAggregateInputType = {
    id?: true
    mes?: true
    ano?: true
    valor?: true
    valorUtilizado?: true
    userId?: true
    categoriaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrcamentoMaxAggregateInputType = {
    id?: true
    mes?: true
    ano?: true
    valor?: true
    valorUtilizado?: true
    userId?: true
    categoriaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrcamentoCountAggregateInputType = {
    id?: true
    mes?: true
    ano?: true
    valor?: true
    valorUtilizado?: true
    userId?: true
    categoriaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrcamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orcamento to aggregate.
     */
    where?: OrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcamentos to fetch.
     */
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orcamentos
    **/
    _count?: true | OrcamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrcamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrcamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrcamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrcamentoMaxAggregateInputType
  }

  export type GetOrcamentoAggregateType<T extends OrcamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateOrcamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrcamento[P]>
      : GetScalarType<T[P], AggregateOrcamento[P]>
  }




  export type OrcamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrcamentoWhereInput
    orderBy?: OrcamentoOrderByWithAggregationInput | OrcamentoOrderByWithAggregationInput[]
    by: OrcamentoScalarFieldEnum[] | OrcamentoScalarFieldEnum
    having?: OrcamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrcamentoCountAggregateInputType | true
    _avg?: OrcamentoAvgAggregateInputType
    _sum?: OrcamentoSumAggregateInputType
    _min?: OrcamentoMinAggregateInputType
    _max?: OrcamentoMaxAggregateInputType
  }

  export type OrcamentoGroupByOutputType = {
    id: string
    mes: number
    ano: number
    valor: Decimal
    valorUtilizado: Decimal
    userId: string
    categoriaId: string
    createdAt: Date
    updatedAt: Date
    _count: OrcamentoCountAggregateOutputType | null
    _avg: OrcamentoAvgAggregateOutputType | null
    _sum: OrcamentoSumAggregateOutputType | null
    _min: OrcamentoMinAggregateOutputType | null
    _max: OrcamentoMaxAggregateOutputType | null
  }

  type GetOrcamentoGroupByPayload<T extends OrcamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrcamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrcamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrcamentoGroupByOutputType[P]>
            : GetScalarType<T[P], OrcamentoGroupByOutputType[P]>
        }
      >
    >


  export type OrcamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mes?: boolean
    ano?: boolean
    valor?: boolean
    valorUtilizado?: boolean
    userId?: boolean
    categoriaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orcamento"]>

  export type OrcamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mes?: boolean
    ano?: boolean
    valor?: boolean
    valorUtilizado?: boolean
    userId?: boolean
    categoriaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orcamento"]>

  export type OrcamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mes?: boolean
    ano?: boolean
    valor?: boolean
    valorUtilizado?: boolean
    userId?: boolean
    categoriaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orcamento"]>

  export type OrcamentoSelectScalar = {
    id?: boolean
    mes?: boolean
    ano?: boolean
    valor?: boolean
    valorUtilizado?: boolean
    userId?: boolean
    categoriaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrcamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mes" | "ano" | "valor" | "valorUtilizado" | "userId" | "categoriaId" | "createdAt" | "updatedAt", ExtArgs["result"]["orcamento"]>
  export type OrcamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type OrcamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type OrcamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $OrcamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orcamento"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mes: number
      ano: number
      valor: Prisma.Decimal
      valorUtilizado: Prisma.Decimal
      userId: string
      categoriaId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orcamento"]>
    composites: {}
  }

  type OrcamentoGetPayload<S extends boolean | null | undefined | OrcamentoDefaultArgs> = $Result.GetResult<Prisma.$OrcamentoPayload, S>

  type OrcamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrcamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrcamentoCountAggregateInputType | true
    }

  export interface OrcamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orcamento'], meta: { name: 'Orcamento' } }
    /**
     * Find zero or one Orcamento that matches the filter.
     * @param {OrcamentoFindUniqueArgs} args - Arguments to find a Orcamento
     * @example
     * // Get one Orcamento
     * const orcamento = await prisma.orcamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrcamentoFindUniqueArgs>(args: SelectSubset<T, OrcamentoFindUniqueArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orcamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrcamentoFindUniqueOrThrowArgs} args - Arguments to find a Orcamento
     * @example
     * // Get one Orcamento
     * const orcamento = await prisma.orcamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrcamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, OrcamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orcamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoFindFirstArgs} args - Arguments to find a Orcamento
     * @example
     * // Get one Orcamento
     * const orcamento = await prisma.orcamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrcamentoFindFirstArgs>(args?: SelectSubset<T, OrcamentoFindFirstArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orcamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoFindFirstOrThrowArgs} args - Arguments to find a Orcamento
     * @example
     * // Get one Orcamento
     * const orcamento = await prisma.orcamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrcamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, OrcamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orcamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orcamentos
     * const orcamentos = await prisma.orcamento.findMany()
     * 
     * // Get first 10 Orcamentos
     * const orcamentos = await prisma.orcamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orcamentoWithIdOnly = await prisma.orcamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrcamentoFindManyArgs>(args?: SelectSubset<T, OrcamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orcamento.
     * @param {OrcamentoCreateArgs} args - Arguments to create a Orcamento.
     * @example
     * // Create one Orcamento
     * const Orcamento = await prisma.orcamento.create({
     *   data: {
     *     // ... data to create a Orcamento
     *   }
     * })
     * 
     */
    create<T extends OrcamentoCreateArgs>(args: SelectSubset<T, OrcamentoCreateArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orcamentos.
     * @param {OrcamentoCreateManyArgs} args - Arguments to create many Orcamentos.
     * @example
     * // Create many Orcamentos
     * const orcamento = await prisma.orcamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrcamentoCreateManyArgs>(args?: SelectSubset<T, OrcamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orcamentos and returns the data saved in the database.
     * @param {OrcamentoCreateManyAndReturnArgs} args - Arguments to create many Orcamentos.
     * @example
     * // Create many Orcamentos
     * const orcamento = await prisma.orcamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orcamentos and only return the `id`
     * const orcamentoWithIdOnly = await prisma.orcamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrcamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, OrcamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orcamento.
     * @param {OrcamentoDeleteArgs} args - Arguments to delete one Orcamento.
     * @example
     * // Delete one Orcamento
     * const Orcamento = await prisma.orcamento.delete({
     *   where: {
     *     // ... filter to delete one Orcamento
     *   }
     * })
     * 
     */
    delete<T extends OrcamentoDeleteArgs>(args: SelectSubset<T, OrcamentoDeleteArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orcamento.
     * @param {OrcamentoUpdateArgs} args - Arguments to update one Orcamento.
     * @example
     * // Update one Orcamento
     * const orcamento = await prisma.orcamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrcamentoUpdateArgs>(args: SelectSubset<T, OrcamentoUpdateArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orcamentos.
     * @param {OrcamentoDeleteManyArgs} args - Arguments to filter Orcamentos to delete.
     * @example
     * // Delete a few Orcamentos
     * const { count } = await prisma.orcamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrcamentoDeleteManyArgs>(args?: SelectSubset<T, OrcamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orcamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orcamentos
     * const orcamento = await prisma.orcamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrcamentoUpdateManyArgs>(args: SelectSubset<T, OrcamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orcamentos and returns the data updated in the database.
     * @param {OrcamentoUpdateManyAndReturnArgs} args - Arguments to update many Orcamentos.
     * @example
     * // Update many Orcamentos
     * const orcamento = await prisma.orcamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orcamentos and only return the `id`
     * const orcamentoWithIdOnly = await prisma.orcamento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrcamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, OrcamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orcamento.
     * @param {OrcamentoUpsertArgs} args - Arguments to update or create a Orcamento.
     * @example
     * // Update or create a Orcamento
     * const orcamento = await prisma.orcamento.upsert({
     *   create: {
     *     // ... data to create a Orcamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orcamento we want to update
     *   }
     * })
     */
    upsert<T extends OrcamentoUpsertArgs>(args: SelectSubset<T, OrcamentoUpsertArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orcamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoCountArgs} args - Arguments to filter Orcamentos to count.
     * @example
     * // Count the number of Orcamentos
     * const count = await prisma.orcamento.count({
     *   where: {
     *     // ... the filter for the Orcamentos we want to count
     *   }
     * })
    **/
    count<T extends OrcamentoCountArgs>(
      args?: Subset<T, OrcamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrcamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orcamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrcamentoAggregateArgs>(args: Subset<T, OrcamentoAggregateArgs>): Prisma.PrismaPromise<GetOrcamentoAggregateType<T>>

    /**
     * Group by Orcamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrcamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrcamentoGroupByArgs['orderBy'] }
        : { orderBy?: OrcamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrcamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrcamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orcamento model
   */
  readonly fields: OrcamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orcamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrcamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orcamento model
   */
  interface OrcamentoFieldRefs {
    readonly id: FieldRef<"Orcamento", 'String'>
    readonly mes: FieldRef<"Orcamento", 'Int'>
    readonly ano: FieldRef<"Orcamento", 'Int'>
    readonly valor: FieldRef<"Orcamento", 'Decimal'>
    readonly valorUtilizado: FieldRef<"Orcamento", 'Decimal'>
    readonly userId: FieldRef<"Orcamento", 'String'>
    readonly categoriaId: FieldRef<"Orcamento", 'String'>
    readonly createdAt: FieldRef<"Orcamento", 'DateTime'>
    readonly updatedAt: FieldRef<"Orcamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orcamento findUnique
   */
  export type OrcamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which Orcamento to fetch.
     */
    where: OrcamentoWhereUniqueInput
  }

  /**
   * Orcamento findUniqueOrThrow
   */
  export type OrcamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which Orcamento to fetch.
     */
    where: OrcamentoWhereUniqueInput
  }

  /**
   * Orcamento findFirst
   */
  export type OrcamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which Orcamento to fetch.
     */
    where?: OrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcamentos to fetch.
     */
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orcamentos.
     */
    cursor?: OrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orcamentos.
     */
    distinct?: OrcamentoScalarFieldEnum | OrcamentoScalarFieldEnum[]
  }

  /**
   * Orcamento findFirstOrThrow
   */
  export type OrcamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which Orcamento to fetch.
     */
    where?: OrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcamentos to fetch.
     */
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orcamentos.
     */
    cursor?: OrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orcamentos.
     */
    distinct?: OrcamentoScalarFieldEnum | OrcamentoScalarFieldEnum[]
  }

  /**
   * Orcamento findMany
   */
  export type OrcamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which Orcamentos to fetch.
     */
    where?: OrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcamentos to fetch.
     */
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orcamentos.
     */
    cursor?: OrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcamentos.
     */
    skip?: number
    distinct?: OrcamentoScalarFieldEnum | OrcamentoScalarFieldEnum[]
  }

  /**
   * Orcamento create
   */
  export type OrcamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Orcamento.
     */
    data: XOR<OrcamentoCreateInput, OrcamentoUncheckedCreateInput>
  }

  /**
   * Orcamento createMany
   */
  export type OrcamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orcamentos.
     */
    data: OrcamentoCreateManyInput | OrcamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orcamento createManyAndReturn
   */
  export type OrcamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Orcamentos.
     */
    data: OrcamentoCreateManyInput | OrcamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orcamento update
   */
  export type OrcamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Orcamento.
     */
    data: XOR<OrcamentoUpdateInput, OrcamentoUncheckedUpdateInput>
    /**
     * Choose, which Orcamento to update.
     */
    where: OrcamentoWhereUniqueInput
  }

  /**
   * Orcamento updateMany
   */
  export type OrcamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orcamentos.
     */
    data: XOR<OrcamentoUpdateManyMutationInput, OrcamentoUncheckedUpdateManyInput>
    /**
     * Filter which Orcamentos to update
     */
    where?: OrcamentoWhereInput
    /**
     * Limit how many Orcamentos to update.
     */
    limit?: number
  }

  /**
   * Orcamento updateManyAndReturn
   */
  export type OrcamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * The data used to update Orcamentos.
     */
    data: XOR<OrcamentoUpdateManyMutationInput, OrcamentoUncheckedUpdateManyInput>
    /**
     * Filter which Orcamentos to update
     */
    where?: OrcamentoWhereInput
    /**
     * Limit how many Orcamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orcamento upsert
   */
  export type OrcamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Orcamento to update in case it exists.
     */
    where: OrcamentoWhereUniqueInput
    /**
     * In case the Orcamento found by the `where` argument doesn't exist, create a new Orcamento with this data.
     */
    create: XOR<OrcamentoCreateInput, OrcamentoUncheckedCreateInput>
    /**
     * In case the Orcamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrcamentoUpdateInput, OrcamentoUncheckedUpdateInput>
  }

  /**
   * Orcamento delete
   */
  export type OrcamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter which Orcamento to delete.
     */
    where: OrcamentoWhereUniqueInput
  }

  /**
   * Orcamento deleteMany
   */
  export type OrcamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orcamentos to delete
     */
    where?: OrcamentoWhereInput
    /**
     * Limit how many Orcamentos to delete.
     */
    limit?: number
  }

  /**
   * Orcamento without action
   */
  export type OrcamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
  }


  /**
   * Model Documento
   */

  export type AggregateDocumento = {
    _count: DocumentoCountAggregateOutputType | null
    _avg: DocumentoAvgAggregateOutputType | null
    _sum: DocumentoSumAggregateOutputType | null
    _min: DocumentoMinAggregateOutputType | null
    _max: DocumentoMaxAggregateOutputType | null
  }

  export type DocumentoAvgAggregateOutputType = {
    tamanho: number | null
  }

  export type DocumentoSumAggregateOutputType = {
    tamanho: number | null
  }

  export type DocumentoMinAggregateOutputType = {
    id: string | null
    nomeArquivo: string | null
    tipoArquivo: string | null
    tamanho: number | null
    url: string | null
    descricao: string | null
    userId: string | null
    transacaoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentoMaxAggregateOutputType = {
    id: string | null
    nomeArquivo: string | null
    tipoArquivo: string | null
    tamanho: number | null
    url: string | null
    descricao: string | null
    userId: string | null
    transacaoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentoCountAggregateOutputType = {
    id: number
    nomeArquivo: number
    tipoArquivo: number
    tamanho: number
    url: number
    descricao: number
    userId: number
    transacaoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentoAvgAggregateInputType = {
    tamanho?: true
  }

  export type DocumentoSumAggregateInputType = {
    tamanho?: true
  }

  export type DocumentoMinAggregateInputType = {
    id?: true
    nomeArquivo?: true
    tipoArquivo?: true
    tamanho?: true
    url?: true
    descricao?: true
    userId?: true
    transacaoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentoMaxAggregateInputType = {
    id?: true
    nomeArquivo?: true
    tipoArquivo?: true
    tamanho?: true
    url?: true
    descricao?: true
    userId?: true
    transacaoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentoCountAggregateInputType = {
    id?: true
    nomeArquivo?: true
    tipoArquivo?: true
    tamanho?: true
    url?: true
    descricao?: true
    userId?: true
    transacaoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documento to aggregate.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documentos
    **/
    _count?: true | DocumentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentoMaxAggregateInputType
  }

  export type GetDocumentoAggregateType<T extends DocumentoAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumento[P]>
      : GetScalarType<T[P], AggregateDocumento[P]>
  }




  export type DocumentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithAggregationInput | DocumentoOrderByWithAggregationInput[]
    by: DocumentoScalarFieldEnum[] | DocumentoScalarFieldEnum
    having?: DocumentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentoCountAggregateInputType | true
    _avg?: DocumentoAvgAggregateInputType
    _sum?: DocumentoSumAggregateInputType
    _min?: DocumentoMinAggregateInputType
    _max?: DocumentoMaxAggregateInputType
  }

  export type DocumentoGroupByOutputType = {
    id: string
    nomeArquivo: string
    tipoArquivo: string
    tamanho: number
    url: string
    descricao: string | null
    userId: string
    transacaoId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DocumentoCountAggregateOutputType | null
    _avg: DocumentoAvgAggregateOutputType | null
    _sum: DocumentoSumAggregateOutputType | null
    _min: DocumentoMinAggregateOutputType | null
    _max: DocumentoMaxAggregateOutputType | null
  }

  type GetDocumentoGroupByPayload<T extends DocumentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentoGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentoGroupByOutputType[P]>
        }
      >
    >


  export type DocumentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeArquivo?: boolean
    tipoArquivo?: boolean
    tamanho?: boolean
    url?: boolean
    descricao?: boolean
    userId?: boolean
    transacaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transacao?: boolean | Documento$transacaoArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>

  export type DocumentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeArquivo?: boolean
    tipoArquivo?: boolean
    tamanho?: boolean
    url?: boolean
    descricao?: boolean
    userId?: boolean
    transacaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transacao?: boolean | Documento$transacaoArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>

  export type DocumentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeArquivo?: boolean
    tipoArquivo?: boolean
    tamanho?: boolean
    url?: boolean
    descricao?: boolean
    userId?: boolean
    transacaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transacao?: boolean | Documento$transacaoArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>

  export type DocumentoSelectScalar = {
    id?: boolean
    nomeArquivo?: boolean
    tipoArquivo?: boolean
    tamanho?: boolean
    url?: boolean
    descricao?: boolean
    userId?: boolean
    transacaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeArquivo" | "tipoArquivo" | "tamanho" | "url" | "descricao" | "userId" | "transacaoId" | "createdAt" | "updatedAt", ExtArgs["result"]["documento"]>
  export type DocumentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transacao?: boolean | Documento$transacaoArgs<ExtArgs>
  }
  export type DocumentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transacao?: boolean | Documento$transacaoArgs<ExtArgs>
  }
  export type DocumentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transacao?: boolean | Documento$transacaoArgs<ExtArgs>
  }

  export type $DocumentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Documento"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transacao: Prisma.$TransacaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomeArquivo: string
      tipoArquivo: string
      tamanho: number
      url: string
      descricao: string | null
      userId: string
      transacaoId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["documento"]>
    composites: {}
  }

  type DocumentoGetPayload<S extends boolean | null | undefined | DocumentoDefaultArgs> = $Result.GetResult<Prisma.$DocumentoPayload, S>

  type DocumentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentoCountAggregateInputType | true
    }

  export interface DocumentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Documento'], meta: { name: 'Documento' } }
    /**
     * Find zero or one Documento that matches the filter.
     * @param {DocumentoFindUniqueArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentoFindUniqueArgs>(args: SelectSubset<T, DocumentoFindUniqueArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentoFindUniqueOrThrowArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentoFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoFindFirstArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentoFindFirstArgs>(args?: SelectSubset<T, DocumentoFindFirstArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoFindFirstOrThrowArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentoFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documentos
     * const documentos = await prisma.documento.findMany()
     * 
     * // Get first 10 Documentos
     * const documentos = await prisma.documento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentoWithIdOnly = await prisma.documento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentoFindManyArgs>(args?: SelectSubset<T, DocumentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documento.
     * @param {DocumentoCreateArgs} args - Arguments to create a Documento.
     * @example
     * // Create one Documento
     * const Documento = await prisma.documento.create({
     *   data: {
     *     // ... data to create a Documento
     *   }
     * })
     * 
     */
    create<T extends DocumentoCreateArgs>(args: SelectSubset<T, DocumentoCreateArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documentos.
     * @param {DocumentoCreateManyArgs} args - Arguments to create many Documentos.
     * @example
     * // Create many Documentos
     * const documento = await prisma.documento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentoCreateManyArgs>(args?: SelectSubset<T, DocumentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documentos and returns the data saved in the database.
     * @param {DocumentoCreateManyAndReturnArgs} args - Arguments to create many Documentos.
     * @example
     * // Create many Documentos
     * const documento = await prisma.documento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documentos and only return the `id`
     * const documentoWithIdOnly = await prisma.documento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentoCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documento.
     * @param {DocumentoDeleteArgs} args - Arguments to delete one Documento.
     * @example
     * // Delete one Documento
     * const Documento = await prisma.documento.delete({
     *   where: {
     *     // ... filter to delete one Documento
     *   }
     * })
     * 
     */
    delete<T extends DocumentoDeleteArgs>(args: SelectSubset<T, DocumentoDeleteArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documento.
     * @param {DocumentoUpdateArgs} args - Arguments to update one Documento.
     * @example
     * // Update one Documento
     * const documento = await prisma.documento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentoUpdateArgs>(args: SelectSubset<T, DocumentoUpdateArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documentos.
     * @param {DocumentoDeleteManyArgs} args - Arguments to filter Documentos to delete.
     * @example
     * // Delete a few Documentos
     * const { count } = await prisma.documento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentoDeleteManyArgs>(args?: SelectSubset<T, DocumentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documentos
     * const documento = await prisma.documento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentoUpdateManyArgs>(args: SelectSubset<T, DocumentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentos and returns the data updated in the database.
     * @param {DocumentoUpdateManyAndReturnArgs} args - Arguments to update many Documentos.
     * @example
     * // Update many Documentos
     * const documento = await prisma.documento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documentos and only return the `id`
     * const documentoWithIdOnly = await prisma.documento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentoUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documento.
     * @param {DocumentoUpsertArgs} args - Arguments to update or create a Documento.
     * @example
     * // Update or create a Documento
     * const documento = await prisma.documento.upsert({
     *   create: {
     *     // ... data to create a Documento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documento we want to update
     *   }
     * })
     */
    upsert<T extends DocumentoUpsertArgs>(args: SelectSubset<T, DocumentoUpsertArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoCountArgs} args - Arguments to filter Documentos to count.
     * @example
     * // Count the number of Documentos
     * const count = await prisma.documento.count({
     *   where: {
     *     // ... the filter for the Documentos we want to count
     *   }
     * })
    **/
    count<T extends DocumentoCountArgs>(
      args?: Subset<T, DocumentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentoAggregateArgs>(args: Subset<T, DocumentoAggregateArgs>): Prisma.PrismaPromise<GetDocumentoAggregateType<T>>

    /**
     * Group by Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentoGroupByArgs['orderBy'] }
        : { orderBy?: DocumentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Documento model
   */
  readonly fields: DocumentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Documento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transacao<T extends Documento$transacaoArgs<ExtArgs> = {}>(args?: Subset<T, Documento$transacaoArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Documento model
   */
  interface DocumentoFieldRefs {
    readonly id: FieldRef<"Documento", 'String'>
    readonly nomeArquivo: FieldRef<"Documento", 'String'>
    readonly tipoArquivo: FieldRef<"Documento", 'String'>
    readonly tamanho: FieldRef<"Documento", 'Int'>
    readonly url: FieldRef<"Documento", 'String'>
    readonly descricao: FieldRef<"Documento", 'String'>
    readonly userId: FieldRef<"Documento", 'String'>
    readonly transacaoId: FieldRef<"Documento", 'String'>
    readonly createdAt: FieldRef<"Documento", 'DateTime'>
    readonly updatedAt: FieldRef<"Documento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Documento findUnique
   */
  export type DocumentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento findUniqueOrThrow
   */
  export type DocumentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento findFirst
   */
  export type DocumentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documentos.
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documentos.
     */
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Documento findFirstOrThrow
   */
  export type DocumentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documentos.
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documentos.
     */
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Documento findMany
   */
  export type DocumentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documentos to fetch.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documentos.
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Documento create
   */
  export type DocumentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Documento.
     */
    data: XOR<DocumentoCreateInput, DocumentoUncheckedCreateInput>
  }

  /**
   * Documento createMany
   */
  export type DocumentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documentos.
     */
    data: DocumentoCreateManyInput | DocumentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Documento createManyAndReturn
   */
  export type DocumentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * The data used to create many Documentos.
     */
    data: DocumentoCreateManyInput | DocumentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documento update
   */
  export type DocumentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Documento.
     */
    data: XOR<DocumentoUpdateInput, DocumentoUncheckedUpdateInput>
    /**
     * Choose, which Documento to update.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento updateMany
   */
  export type DocumentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documentos.
     */
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyInput>
    /**
     * Filter which Documentos to update
     */
    where?: DocumentoWhereInput
    /**
     * Limit how many Documentos to update.
     */
    limit?: number
  }

  /**
   * Documento updateManyAndReturn
   */
  export type DocumentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * The data used to update Documentos.
     */
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyInput>
    /**
     * Filter which Documentos to update
     */
    where?: DocumentoWhereInput
    /**
     * Limit how many Documentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documento upsert
   */
  export type DocumentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Documento to update in case it exists.
     */
    where: DocumentoWhereUniqueInput
    /**
     * In case the Documento found by the `where` argument doesn't exist, create a new Documento with this data.
     */
    create: XOR<DocumentoCreateInput, DocumentoUncheckedCreateInput>
    /**
     * In case the Documento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentoUpdateInput, DocumentoUncheckedUpdateInput>
  }

  /**
   * Documento delete
   */
  export type DocumentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter which Documento to delete.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento deleteMany
   */
  export type DocumentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documentos to delete
     */
    where?: DocumentoWhereInput
    /**
     * Limit how many Documentos to delete.
     */
    limit?: number
  }

  /**
   * Documento.transacao
   */
  export type Documento$transacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    where?: TransacaoWhereInput
  }

  /**
   * Documento without action
   */
  export type DocumentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
  }


  /**
   * Model Notificacao
   */

  export type AggregateNotificacao = {
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  export type NotificacaoMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    mensagem: string | null
    tipo: string | null
    lida: boolean | null
    link: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificacaoMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    mensagem: string | null
    tipo: string | null
    lida: boolean | null
    link: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificacaoCountAggregateOutputType = {
    id: number
    titulo: number
    mensagem: number
    tipo: number
    lida: number
    link: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificacaoMinAggregateInputType = {
    id?: true
    titulo?: true
    mensagem?: true
    tipo?: true
    lida?: true
    link?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificacaoMaxAggregateInputType = {
    id?: true
    titulo?: true
    mensagem?: true
    tipo?: true
    lida?: true
    link?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificacaoCountAggregateInputType = {
    id?: true
    titulo?: true
    mensagem?: true
    tipo?: true
    lida?: true
    link?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacao to aggregate.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacaos
    **/
    _count?: true | NotificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacaoMaxAggregateInputType
  }

  export type GetNotificacaoAggregateType<T extends NotificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacao[P]>
      : GetScalarType<T[P], AggregateNotificacao[P]>
  }




  export type NotificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithAggregationInput | NotificacaoOrderByWithAggregationInput[]
    by: NotificacaoScalarFieldEnum[] | NotificacaoScalarFieldEnum
    having?: NotificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacaoCountAggregateInputType | true
    _min?: NotificacaoMinAggregateInputType
    _max?: NotificacaoMaxAggregateInputType
  }

  export type NotificacaoGroupByOutputType = {
    id: string
    titulo: string
    mensagem: string
    tipo: string
    lida: boolean
    link: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  type GetNotificacaoGroupByPayload<T extends NotificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
        }
      >
    >


  export type NotificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    mensagem?: boolean
    tipo?: boolean
    lida?: boolean
    link?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    mensagem?: boolean
    tipo?: boolean
    lida?: boolean
    link?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    mensagem?: boolean
    tipo?: boolean
    lida?: boolean
    link?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectScalar = {
    id?: boolean
    titulo?: boolean
    mensagem?: boolean
    tipo?: boolean
    lida?: boolean
    link?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "mensagem" | "tipo" | "lida" | "link" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["notificacao"]>
  export type NotificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacao"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      mensagem: string
      tipo: string
      lida: boolean
      link: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notificacao"]>
    composites: {}
  }

  type NotificacaoGetPayload<S extends boolean | null | undefined | NotificacaoDefaultArgs> = $Result.GetResult<Prisma.$NotificacaoPayload, S>

  type NotificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacaoCountAggregateInputType | true
    }

  export interface NotificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacao'], meta: { name: 'Notificacao' } }
    /**
     * Find zero or one Notificacao that matches the filter.
     * @param {NotificacaoFindUniqueArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacaoFindUniqueArgs>(args: SelectSubset<T, NotificacaoFindUniqueArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificacaoFindUniqueOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacaoFindFirstArgs>(args?: SelectSubset<T, NotificacaoFindFirstArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacaos
     * const notificacaos = await prisma.notificacao.findMany()
     * 
     * // Get first 10 Notificacaos
     * const notificacaos = await prisma.notificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacaoFindManyArgs>(args?: SelectSubset<T, NotificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacao.
     * @param {NotificacaoCreateArgs} args - Arguments to create a Notificacao.
     * @example
     * // Create one Notificacao
     * const Notificacao = await prisma.notificacao.create({
     *   data: {
     *     // ... data to create a Notificacao
     *   }
     * })
     * 
     */
    create<T extends NotificacaoCreateArgs>(args: SelectSubset<T, NotificacaoCreateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacaos.
     * @param {NotificacaoCreateManyArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacaoCreateManyArgs>(args?: SelectSubset<T, NotificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificacaos and returns the data saved in the database.
     * @param {NotificacaoCreateManyAndReturnArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notificacao.
     * @param {NotificacaoDeleteArgs} args - Arguments to delete one Notificacao.
     * @example
     * // Delete one Notificacao
     * const Notificacao = await prisma.notificacao.delete({
     *   where: {
     *     // ... filter to delete one Notificacao
     *   }
     * })
     * 
     */
    delete<T extends NotificacaoDeleteArgs>(args: SelectSubset<T, NotificacaoDeleteArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacao.
     * @param {NotificacaoUpdateArgs} args - Arguments to update one Notificacao.
     * @example
     * // Update one Notificacao
     * const notificacao = await prisma.notificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacaoUpdateArgs>(args: SelectSubset<T, NotificacaoUpdateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacaos.
     * @param {NotificacaoDeleteManyArgs} args - Arguments to filter Notificacaos to delete.
     * @example
     * // Delete a few Notificacaos
     * const { count } = await prisma.notificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacaoDeleteManyArgs>(args?: SelectSubset<T, NotificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacaoUpdateManyArgs>(args: SelectSubset<T, NotificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos and returns the data updated in the database.
     * @param {NotificacaoUpdateManyAndReturnArgs} args - Arguments to update many Notificacaos.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notificacao.
     * @param {NotificacaoUpsertArgs} args - Arguments to update or create a Notificacao.
     * @example
     * // Update or create a Notificacao
     * const notificacao = await prisma.notificacao.upsert({
     *   create: {
     *     // ... data to create a Notificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacao we want to update
     *   }
     * })
     */
    upsert<T extends NotificacaoUpsertArgs>(args: SelectSubset<T, NotificacaoUpsertArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoCountArgs} args - Arguments to filter Notificacaos to count.
     * @example
     * // Count the number of Notificacaos
     * const count = await prisma.notificacao.count({
     *   where: {
     *     // ... the filter for the Notificacaos we want to count
     *   }
     * })
    **/
    count<T extends NotificacaoCountArgs>(
      args?: Subset<T, NotificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificacaoAggregateArgs>(args: Subset<T, NotificacaoAggregateArgs>): Prisma.PrismaPromise<GetNotificacaoAggregateType<T>>

    /**
     * Group by Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacaoGroupByArgs['orderBy'] }
        : { orderBy?: NotificacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacao model
   */
  readonly fields: NotificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notificacao model
   */
  interface NotificacaoFieldRefs {
    readonly id: FieldRef<"Notificacao", 'String'>
    readonly titulo: FieldRef<"Notificacao", 'String'>
    readonly mensagem: FieldRef<"Notificacao", 'String'>
    readonly tipo: FieldRef<"Notificacao", 'String'>
    readonly lida: FieldRef<"Notificacao", 'Boolean'>
    readonly link: FieldRef<"Notificacao", 'String'>
    readonly userId: FieldRef<"Notificacao", 'String'>
    readonly createdAt: FieldRef<"Notificacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Notificacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notificacao findUnique
   */
  export type NotificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findUniqueOrThrow
   */
  export type NotificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findFirst
   */
  export type NotificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findFirstOrThrow
   */
  export type NotificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findMany
   */
  export type NotificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacaos to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao create
   */
  export type NotificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacao.
     */
    data: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
  }

  /**
   * Notificacao createMany
   */
  export type NotificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacao createManyAndReturn
   */
  export type NotificacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao update
   */
  export type NotificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacao.
     */
    data: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
    /**
     * Choose, which Notificacao to update.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao updateMany
   */
  export type NotificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
  }

  /**
   * Notificacao updateManyAndReturn
   */
  export type NotificacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao upsert
   */
  export type NotificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacao to update in case it exists.
     */
    where: NotificacaoWhereUniqueInput
    /**
     * In case the Notificacao found by the `where` argument doesn't exist, create a new Notificacao with this data.
     */
    create: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
    /**
     * In case the Notificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
  }

  /**
   * Notificacao delete
   */
  export type NotificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter which Notificacao to delete.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao deleteMany
   */
  export type NotificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacaos to delete
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to delete.
     */
    limit?: number
  }

  /**
   * Notificacao without action
   */
  export type NotificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senhaHash: 'senhaHash',
    cpf: 'cpf',
    telefone: 'telefone',
    dataNascimento: 'dataNascimento',
    avatarUrl: 'avatarUrl',
    ativo: 'ativo',
    emailVerificado: 'emailVerificado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TransacaoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    valor: 'valor',
    tipo: 'tipo',
    data: 'data',
    status: 'status',
    observacoes: 'observacoes',
    tags: 'tags',
    recorrente: 'recorrente',
    recorrenciaId: 'recorrenciaId',
    userId: 'userId',
    categoriaId: 'categoriaId',
    contaId: 'contaId',
    metaId: 'metaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransacaoScalarFieldEnum = (typeof TransacaoScalarFieldEnum)[keyof typeof TransacaoScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    tipo: 'tipo',
    cor: 'cor',
    icone: 'icone',
    orcamentoPadrao: 'orcamentoPadrao',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ContaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    instituicao: 'instituicao',
    tipo: 'tipo',
    saldoInicial: 'saldoInicial',
    saldoAtual: 'saldoAtual',
    cor: 'cor',
    ativo: 'ativo',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContaScalarFieldEnum = (typeof ContaScalarFieldEnum)[keyof typeof ContaScalarFieldEnum]


  export const MetaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    valorAlvo: 'valorAlvo',
    valorAtual: 'valorAtual',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    periodicidade: 'periodicidade',
    cor: 'cor',
    concluida: 'concluida',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetaScalarFieldEnum = (typeof MetaScalarFieldEnum)[keyof typeof MetaScalarFieldEnum]


  export const OrcamentoScalarFieldEnum: {
    id: 'id',
    mes: 'mes',
    ano: 'ano',
    valor: 'valor',
    valorUtilizado: 'valorUtilizado',
    userId: 'userId',
    categoriaId: 'categoriaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrcamentoScalarFieldEnum = (typeof OrcamentoScalarFieldEnum)[keyof typeof OrcamentoScalarFieldEnum]


  export const DocumentoScalarFieldEnum: {
    id: 'id',
    nomeArquivo: 'nomeArquivo',
    tipoArquivo: 'tipoArquivo',
    tamanho: 'tamanho',
    url: 'url',
    descricao: 'descricao',
    userId: 'userId',
    transacaoId: 'transacaoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentoScalarFieldEnum = (typeof DocumentoScalarFieldEnum)[keyof typeof DocumentoScalarFieldEnum]


  export const NotificacaoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    mensagem: 'mensagem',
    tipo: 'tipo',
    lida: 'lida',
    link: 'link',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificacaoScalarFieldEnum = (typeof NotificacaoScalarFieldEnum)[keyof typeof NotificacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TipoTransacao'
   */
  export type EnumTipoTransacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoTransacao'>
    


  /**
   * Reference to a field of type 'TipoTransacao[]'
   */
  export type ListEnumTipoTransacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoTransacao[]'>
    


  /**
   * Reference to a field of type 'StatusTransacao'
   */
  export type EnumStatusTransacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTransacao'>
    


  /**
   * Reference to a field of type 'StatusTransacao[]'
   */
  export type ListEnumStatusTransacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTransacao[]'>
    


  /**
   * Reference to a field of type 'CategoriaTipo'
   */
  export type EnumCategoriaTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoriaTipo'>
    


  /**
   * Reference to a field of type 'CategoriaTipo[]'
   */
  export type ListEnumCategoriaTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoriaTipo[]'>
    


  /**
   * Reference to a field of type 'PeriodicidadeMeta'
   */
  export type EnumPeriodicidadeMetaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeriodicidadeMeta'>
    


  /**
   * Reference to a field of type 'PeriodicidadeMeta[]'
   */
  export type ListEnumPeriodicidadeMetaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeriodicidadeMeta[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nome?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    senhaHash?: StringFilter<"User"> | string
    cpf?: StringNullableFilter<"User"> | string | null
    telefone?: StringNullableFilter<"User"> | string | null
    dataNascimento?: DateTimeNullableFilter<"User"> | Date | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    ativo?: BoolFilter<"User"> | boolean
    emailVerificado?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    transacoes?: TransacaoListRelationFilter
    categorias?: CategoriaListRelationFilter
    metas?: MetaListRelationFilter
    orcamentos?: OrcamentoListRelationFilter
    documentos?: DocumentoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
    contas?: ContaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    cpf?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    ativo?: SortOrder
    emailVerificado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    transacoes?: TransacaoOrderByRelationAggregateInput
    categorias?: CategoriaOrderByRelationAggregateInput
    metas?: MetaOrderByRelationAggregateInput
    orcamentos?: OrcamentoOrderByRelationAggregateInput
    documentos?: DocumentoOrderByRelationAggregateInput
    notificacoes?: NotificacaoOrderByRelationAggregateInput
    contas?: ContaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cpf?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nome?: StringFilter<"User"> | string
    senhaHash?: StringFilter<"User"> | string
    telefone?: StringNullableFilter<"User"> | string | null
    dataNascimento?: DateTimeNullableFilter<"User"> | Date | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    ativo?: BoolFilter<"User"> | boolean
    emailVerificado?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    transacoes?: TransacaoListRelationFilter
    categorias?: CategoriaListRelationFilter
    metas?: MetaListRelationFilter
    orcamentos?: OrcamentoListRelationFilter
    documentos?: DocumentoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
    contas?: ContaListRelationFilter
  }, "id" | "email" | "cpf">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    cpf?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    ativo?: SortOrder
    emailVerificado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nome?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    senhaHash?: StringWithAggregatesFilter<"User"> | string
    cpf?: StringNullableWithAggregatesFilter<"User"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"User"> | string | null
    dataNascimento?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    ativo?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerificado?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type TransacaoWhereInput = {
    AND?: TransacaoWhereInput | TransacaoWhereInput[]
    OR?: TransacaoWhereInput[]
    NOT?: TransacaoWhereInput | TransacaoWhereInput[]
    id?: StringFilter<"Transacao"> | string
    descricao?: StringFilter<"Transacao"> | string
    valor?: DecimalFilter<"Transacao"> | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFilter<"Transacao"> | $Enums.TipoTransacao
    data?: DateTimeFilter<"Transacao"> | Date | string
    status?: EnumStatusTransacaoFilter<"Transacao"> | $Enums.StatusTransacao
    observacoes?: StringNullableFilter<"Transacao"> | string | null
    tags?: StringNullableListFilter<"Transacao">
    recorrente?: BoolFilter<"Transacao"> | boolean
    recorrenciaId?: StringNullableFilter<"Transacao"> | string | null
    userId?: StringFilter<"Transacao"> | string
    categoriaId?: StringNullableFilter<"Transacao"> | string | null
    contaId?: StringNullableFilter<"Transacao"> | string | null
    metaId?: StringNullableFilter<"Transacao"> | string | null
    createdAt?: DateTimeFilter<"Transacao"> | Date | string
    updatedAt?: DateTimeFilter<"Transacao"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    conta?: XOR<ContaNullableScalarRelationFilter, ContaWhereInput> | null
    meta?: XOR<MetaNullableScalarRelationFilter, MetaWhereInput> | null
    documentos?: DocumentoListRelationFilter
  }

  export type TransacaoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    status?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    tags?: SortOrder
    recorrente?: SortOrder
    recorrenciaId?: SortOrderInput | SortOrder
    userId?: SortOrder
    categoriaId?: SortOrderInput | SortOrder
    contaId?: SortOrderInput | SortOrder
    metaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
    conta?: ContaOrderByWithRelationInput
    meta?: MetaOrderByWithRelationInput
    documentos?: DocumentoOrderByRelationAggregateInput
  }

  export type TransacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransacaoWhereInput | TransacaoWhereInput[]
    OR?: TransacaoWhereInput[]
    NOT?: TransacaoWhereInput | TransacaoWhereInput[]
    descricao?: StringFilter<"Transacao"> | string
    valor?: DecimalFilter<"Transacao"> | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFilter<"Transacao"> | $Enums.TipoTransacao
    data?: DateTimeFilter<"Transacao"> | Date | string
    status?: EnumStatusTransacaoFilter<"Transacao"> | $Enums.StatusTransacao
    observacoes?: StringNullableFilter<"Transacao"> | string | null
    tags?: StringNullableListFilter<"Transacao">
    recorrente?: BoolFilter<"Transacao"> | boolean
    recorrenciaId?: StringNullableFilter<"Transacao"> | string | null
    userId?: StringFilter<"Transacao"> | string
    categoriaId?: StringNullableFilter<"Transacao"> | string | null
    contaId?: StringNullableFilter<"Transacao"> | string | null
    metaId?: StringNullableFilter<"Transacao"> | string | null
    createdAt?: DateTimeFilter<"Transacao"> | Date | string
    updatedAt?: DateTimeFilter<"Transacao"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    conta?: XOR<ContaNullableScalarRelationFilter, ContaWhereInput> | null
    meta?: XOR<MetaNullableScalarRelationFilter, MetaWhereInput> | null
    documentos?: DocumentoListRelationFilter
  }, "id">

  export type TransacaoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    status?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    tags?: SortOrder
    recorrente?: SortOrder
    recorrenciaId?: SortOrderInput | SortOrder
    userId?: SortOrder
    categoriaId?: SortOrderInput | SortOrder
    contaId?: SortOrderInput | SortOrder
    metaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransacaoCountOrderByAggregateInput
    _avg?: TransacaoAvgOrderByAggregateInput
    _max?: TransacaoMaxOrderByAggregateInput
    _min?: TransacaoMinOrderByAggregateInput
    _sum?: TransacaoSumOrderByAggregateInput
  }

  export type TransacaoScalarWhereWithAggregatesInput = {
    AND?: TransacaoScalarWhereWithAggregatesInput | TransacaoScalarWhereWithAggregatesInput[]
    OR?: TransacaoScalarWhereWithAggregatesInput[]
    NOT?: TransacaoScalarWhereWithAggregatesInput | TransacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transacao"> | string
    descricao?: StringWithAggregatesFilter<"Transacao"> | string
    valor?: DecimalWithAggregatesFilter<"Transacao"> | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoWithAggregatesFilter<"Transacao"> | $Enums.TipoTransacao
    data?: DateTimeWithAggregatesFilter<"Transacao"> | Date | string
    status?: EnumStatusTransacaoWithAggregatesFilter<"Transacao"> | $Enums.StatusTransacao
    observacoes?: StringNullableWithAggregatesFilter<"Transacao"> | string | null
    tags?: StringNullableListFilter<"Transacao">
    recorrente?: BoolWithAggregatesFilter<"Transacao"> | boolean
    recorrenciaId?: StringNullableWithAggregatesFilter<"Transacao"> | string | null
    userId?: StringWithAggregatesFilter<"Transacao"> | string
    categoriaId?: StringNullableWithAggregatesFilter<"Transacao"> | string | null
    contaId?: StringNullableWithAggregatesFilter<"Transacao"> | string | null
    metaId?: StringNullableWithAggregatesFilter<"Transacao"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transacao"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: StringFilter<"Categoria"> | string
    nome?: StringFilter<"Categoria"> | string
    descricao?: StringNullableFilter<"Categoria"> | string | null
    tipo?: EnumCategoriaTipoFilter<"Categoria"> | $Enums.CategoriaTipo
    cor?: StringFilter<"Categoria"> | string
    icone?: StringFilter<"Categoria"> | string
    orcamentoPadrao?: DecimalNullableFilter<"Categoria"> | Decimal | DecimalJsLike | number | string | null
    userId?: StringFilter<"Categoria"> | string
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transacoes?: TransacaoListRelationFilter
    orcamentos?: OrcamentoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    tipo?: SortOrder
    cor?: SortOrder
    icone?: SortOrder
    orcamentoPadrao?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transacoes?: TransacaoOrderByRelationAggregateInput
    orcamentos?: OrcamentoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_nome?: CategoriaUserIdNomeCompoundUniqueInput
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nome?: StringFilter<"Categoria"> | string
    descricao?: StringNullableFilter<"Categoria"> | string | null
    tipo?: EnumCategoriaTipoFilter<"Categoria"> | $Enums.CategoriaTipo
    cor?: StringFilter<"Categoria"> | string
    icone?: StringFilter<"Categoria"> | string
    orcamentoPadrao?: DecimalNullableFilter<"Categoria"> | Decimal | DecimalJsLike | number | string | null
    userId?: StringFilter<"Categoria"> | string
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transacoes?: TransacaoListRelationFilter
    orcamentos?: OrcamentoListRelationFilter
  }, "id" | "userId_nome">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    tipo?: SortOrder
    cor?: SortOrder
    icone?: SortOrder
    orcamentoPadrao?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categoria"> | string
    nome?: StringWithAggregatesFilter<"Categoria"> | string
    descricao?: StringNullableWithAggregatesFilter<"Categoria"> | string | null
    tipo?: EnumCategoriaTipoWithAggregatesFilter<"Categoria"> | $Enums.CategoriaTipo
    cor?: StringWithAggregatesFilter<"Categoria"> | string
    icone?: StringWithAggregatesFilter<"Categoria"> | string
    orcamentoPadrao?: DecimalNullableWithAggregatesFilter<"Categoria"> | Decimal | DecimalJsLike | number | string | null
    userId?: StringWithAggregatesFilter<"Categoria"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
  }

  export type ContaWhereInput = {
    AND?: ContaWhereInput | ContaWhereInput[]
    OR?: ContaWhereInput[]
    NOT?: ContaWhereInput | ContaWhereInput[]
    id?: StringFilter<"Conta"> | string
    nome?: StringFilter<"Conta"> | string
    instituicao?: StringFilter<"Conta"> | string
    tipo?: StringFilter<"Conta"> | string
    saldoInicial?: DecimalFilter<"Conta"> | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFilter<"Conta"> | Decimal | DecimalJsLike | number | string
    cor?: StringFilter<"Conta"> | string
    ativo?: BoolFilter<"Conta"> | boolean
    userId?: StringFilter<"Conta"> | string
    createdAt?: DateTimeFilter<"Conta"> | Date | string
    updatedAt?: DateTimeFilter<"Conta"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transacoes?: TransacaoListRelationFilter
  }

  export type ContaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    instituicao?: SortOrder
    tipo?: SortOrder
    saldoInicial?: SortOrder
    saldoAtual?: SortOrder
    cor?: SortOrder
    ativo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transacoes?: TransacaoOrderByRelationAggregateInput
  }

  export type ContaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContaWhereInput | ContaWhereInput[]
    OR?: ContaWhereInput[]
    NOT?: ContaWhereInput | ContaWhereInput[]
    nome?: StringFilter<"Conta"> | string
    instituicao?: StringFilter<"Conta"> | string
    tipo?: StringFilter<"Conta"> | string
    saldoInicial?: DecimalFilter<"Conta"> | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFilter<"Conta"> | Decimal | DecimalJsLike | number | string
    cor?: StringFilter<"Conta"> | string
    ativo?: BoolFilter<"Conta"> | boolean
    userId?: StringFilter<"Conta"> | string
    createdAt?: DateTimeFilter<"Conta"> | Date | string
    updatedAt?: DateTimeFilter<"Conta"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transacoes?: TransacaoListRelationFilter
  }, "id">

  export type ContaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    instituicao?: SortOrder
    tipo?: SortOrder
    saldoInicial?: SortOrder
    saldoAtual?: SortOrder
    cor?: SortOrder
    ativo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContaCountOrderByAggregateInput
    _avg?: ContaAvgOrderByAggregateInput
    _max?: ContaMaxOrderByAggregateInput
    _min?: ContaMinOrderByAggregateInput
    _sum?: ContaSumOrderByAggregateInput
  }

  export type ContaScalarWhereWithAggregatesInput = {
    AND?: ContaScalarWhereWithAggregatesInput | ContaScalarWhereWithAggregatesInput[]
    OR?: ContaScalarWhereWithAggregatesInput[]
    NOT?: ContaScalarWhereWithAggregatesInput | ContaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conta"> | string
    nome?: StringWithAggregatesFilter<"Conta"> | string
    instituicao?: StringWithAggregatesFilter<"Conta"> | string
    tipo?: StringWithAggregatesFilter<"Conta"> | string
    saldoInicial?: DecimalWithAggregatesFilter<"Conta"> | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalWithAggregatesFilter<"Conta"> | Decimal | DecimalJsLike | number | string
    cor?: StringWithAggregatesFilter<"Conta"> | string
    ativo?: BoolWithAggregatesFilter<"Conta"> | boolean
    userId?: StringWithAggregatesFilter<"Conta"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Conta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conta"> | Date | string
  }

  export type MetaWhereInput = {
    AND?: MetaWhereInput | MetaWhereInput[]
    OR?: MetaWhereInput[]
    NOT?: MetaWhereInput | MetaWhereInput[]
    id?: StringFilter<"Meta"> | string
    titulo?: StringFilter<"Meta"> | string
    descricao?: StringNullableFilter<"Meta"> | string | null
    valorAlvo?: DecimalFilter<"Meta"> | Decimal | DecimalJsLike | number | string
    valorAtual?: DecimalFilter<"Meta"> | Decimal | DecimalJsLike | number | string
    dataInicio?: DateTimeFilter<"Meta"> | Date | string
    dataFim?: DateTimeFilter<"Meta"> | Date | string
    periodicidade?: EnumPeriodicidadeMetaFilter<"Meta"> | $Enums.PeriodicidadeMeta
    cor?: StringFilter<"Meta"> | string
    concluida?: BoolFilter<"Meta"> | boolean
    userId?: StringFilter<"Meta"> | string
    createdAt?: DateTimeFilter<"Meta"> | Date | string
    updatedAt?: DateTimeFilter<"Meta"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transacoes?: TransacaoListRelationFilter
  }

  export type MetaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valorAlvo?: SortOrder
    valorAtual?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    periodicidade?: SortOrder
    cor?: SortOrder
    concluida?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transacoes?: TransacaoOrderByRelationAggregateInput
  }

  export type MetaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetaWhereInput | MetaWhereInput[]
    OR?: MetaWhereInput[]
    NOT?: MetaWhereInput | MetaWhereInput[]
    titulo?: StringFilter<"Meta"> | string
    descricao?: StringNullableFilter<"Meta"> | string | null
    valorAlvo?: DecimalFilter<"Meta"> | Decimal | DecimalJsLike | number | string
    valorAtual?: DecimalFilter<"Meta"> | Decimal | DecimalJsLike | number | string
    dataInicio?: DateTimeFilter<"Meta"> | Date | string
    dataFim?: DateTimeFilter<"Meta"> | Date | string
    periodicidade?: EnumPeriodicidadeMetaFilter<"Meta"> | $Enums.PeriodicidadeMeta
    cor?: StringFilter<"Meta"> | string
    concluida?: BoolFilter<"Meta"> | boolean
    userId?: StringFilter<"Meta"> | string
    createdAt?: DateTimeFilter<"Meta"> | Date | string
    updatedAt?: DateTimeFilter<"Meta"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transacoes?: TransacaoListRelationFilter
  }, "id">

  export type MetaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valorAlvo?: SortOrder
    valorAtual?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    periodicidade?: SortOrder
    cor?: SortOrder
    concluida?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetaCountOrderByAggregateInput
    _avg?: MetaAvgOrderByAggregateInput
    _max?: MetaMaxOrderByAggregateInput
    _min?: MetaMinOrderByAggregateInput
    _sum?: MetaSumOrderByAggregateInput
  }

  export type MetaScalarWhereWithAggregatesInput = {
    AND?: MetaScalarWhereWithAggregatesInput | MetaScalarWhereWithAggregatesInput[]
    OR?: MetaScalarWhereWithAggregatesInput[]
    NOT?: MetaScalarWhereWithAggregatesInput | MetaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meta"> | string
    titulo?: StringWithAggregatesFilter<"Meta"> | string
    descricao?: StringNullableWithAggregatesFilter<"Meta"> | string | null
    valorAlvo?: DecimalWithAggregatesFilter<"Meta"> | Decimal | DecimalJsLike | number | string
    valorAtual?: DecimalWithAggregatesFilter<"Meta"> | Decimal | DecimalJsLike | number | string
    dataInicio?: DateTimeWithAggregatesFilter<"Meta"> | Date | string
    dataFim?: DateTimeWithAggregatesFilter<"Meta"> | Date | string
    periodicidade?: EnumPeriodicidadeMetaWithAggregatesFilter<"Meta"> | $Enums.PeriodicidadeMeta
    cor?: StringWithAggregatesFilter<"Meta"> | string
    concluida?: BoolWithAggregatesFilter<"Meta"> | boolean
    userId?: StringWithAggregatesFilter<"Meta"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Meta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meta"> | Date | string
  }

  export type OrcamentoWhereInput = {
    AND?: OrcamentoWhereInput | OrcamentoWhereInput[]
    OR?: OrcamentoWhereInput[]
    NOT?: OrcamentoWhereInput | OrcamentoWhereInput[]
    id?: StringFilter<"Orcamento"> | string
    mes?: IntFilter<"Orcamento"> | number
    ano?: IntFilter<"Orcamento"> | number
    valor?: DecimalFilter<"Orcamento"> | Decimal | DecimalJsLike | number | string
    valorUtilizado?: DecimalFilter<"Orcamento"> | Decimal | DecimalJsLike | number | string
    userId?: StringFilter<"Orcamento"> | string
    categoriaId?: StringFilter<"Orcamento"> | string
    createdAt?: DateTimeFilter<"Orcamento"> | Date | string
    updatedAt?: DateTimeFilter<"Orcamento"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
  }

  export type OrcamentoOrderByWithRelationInput = {
    id?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    valor?: SortOrder
    valorUtilizado?: SortOrder
    userId?: SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
  }

  export type OrcamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_categoriaId_mes_ano?: OrcamentoUserIdCategoriaIdMesAnoCompoundUniqueInput
    AND?: OrcamentoWhereInput | OrcamentoWhereInput[]
    OR?: OrcamentoWhereInput[]
    NOT?: OrcamentoWhereInput | OrcamentoWhereInput[]
    mes?: IntFilter<"Orcamento"> | number
    ano?: IntFilter<"Orcamento"> | number
    valor?: DecimalFilter<"Orcamento"> | Decimal | DecimalJsLike | number | string
    valorUtilizado?: DecimalFilter<"Orcamento"> | Decimal | DecimalJsLike | number | string
    userId?: StringFilter<"Orcamento"> | string
    categoriaId?: StringFilter<"Orcamento"> | string
    createdAt?: DateTimeFilter<"Orcamento"> | Date | string
    updatedAt?: DateTimeFilter<"Orcamento"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
  }, "id" | "userId_categoriaId_mes_ano">

  export type OrcamentoOrderByWithAggregationInput = {
    id?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    valor?: SortOrder
    valorUtilizado?: SortOrder
    userId?: SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrcamentoCountOrderByAggregateInput
    _avg?: OrcamentoAvgOrderByAggregateInput
    _max?: OrcamentoMaxOrderByAggregateInput
    _min?: OrcamentoMinOrderByAggregateInput
    _sum?: OrcamentoSumOrderByAggregateInput
  }

  export type OrcamentoScalarWhereWithAggregatesInput = {
    AND?: OrcamentoScalarWhereWithAggregatesInput | OrcamentoScalarWhereWithAggregatesInput[]
    OR?: OrcamentoScalarWhereWithAggregatesInput[]
    NOT?: OrcamentoScalarWhereWithAggregatesInput | OrcamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Orcamento"> | string
    mes?: IntWithAggregatesFilter<"Orcamento"> | number
    ano?: IntWithAggregatesFilter<"Orcamento"> | number
    valor?: DecimalWithAggregatesFilter<"Orcamento"> | Decimal | DecimalJsLike | number | string
    valorUtilizado?: DecimalWithAggregatesFilter<"Orcamento"> | Decimal | DecimalJsLike | number | string
    userId?: StringWithAggregatesFilter<"Orcamento"> | string
    categoriaId?: StringWithAggregatesFilter<"Orcamento"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Orcamento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Orcamento"> | Date | string
  }

  export type DocumentoWhereInput = {
    AND?: DocumentoWhereInput | DocumentoWhereInput[]
    OR?: DocumentoWhereInput[]
    NOT?: DocumentoWhereInput | DocumentoWhereInput[]
    id?: StringFilter<"Documento"> | string
    nomeArquivo?: StringFilter<"Documento"> | string
    tipoArquivo?: StringFilter<"Documento"> | string
    tamanho?: IntFilter<"Documento"> | number
    url?: StringFilter<"Documento"> | string
    descricao?: StringNullableFilter<"Documento"> | string | null
    userId?: StringFilter<"Documento"> | string
    transacaoId?: StringNullableFilter<"Documento"> | string | null
    createdAt?: DateTimeFilter<"Documento"> | Date | string
    updatedAt?: DateTimeFilter<"Documento"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transacao?: XOR<TransacaoNullableScalarRelationFilter, TransacaoWhereInput> | null
  }

  export type DocumentoOrderByWithRelationInput = {
    id?: SortOrder
    nomeArquivo?: SortOrder
    tipoArquivo?: SortOrder
    tamanho?: SortOrder
    url?: SortOrder
    descricao?: SortOrderInput | SortOrder
    userId?: SortOrder
    transacaoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transacao?: TransacaoOrderByWithRelationInput
  }

  export type DocumentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentoWhereInput | DocumentoWhereInput[]
    OR?: DocumentoWhereInput[]
    NOT?: DocumentoWhereInput | DocumentoWhereInput[]
    nomeArquivo?: StringFilter<"Documento"> | string
    tipoArquivo?: StringFilter<"Documento"> | string
    tamanho?: IntFilter<"Documento"> | number
    url?: StringFilter<"Documento"> | string
    descricao?: StringNullableFilter<"Documento"> | string | null
    userId?: StringFilter<"Documento"> | string
    transacaoId?: StringNullableFilter<"Documento"> | string | null
    createdAt?: DateTimeFilter<"Documento"> | Date | string
    updatedAt?: DateTimeFilter<"Documento"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transacao?: XOR<TransacaoNullableScalarRelationFilter, TransacaoWhereInput> | null
  }, "id">

  export type DocumentoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeArquivo?: SortOrder
    tipoArquivo?: SortOrder
    tamanho?: SortOrder
    url?: SortOrder
    descricao?: SortOrderInput | SortOrder
    userId?: SortOrder
    transacaoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentoCountOrderByAggregateInput
    _avg?: DocumentoAvgOrderByAggregateInput
    _max?: DocumentoMaxOrderByAggregateInput
    _min?: DocumentoMinOrderByAggregateInput
    _sum?: DocumentoSumOrderByAggregateInput
  }

  export type DocumentoScalarWhereWithAggregatesInput = {
    AND?: DocumentoScalarWhereWithAggregatesInput | DocumentoScalarWhereWithAggregatesInput[]
    OR?: DocumentoScalarWhereWithAggregatesInput[]
    NOT?: DocumentoScalarWhereWithAggregatesInput | DocumentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Documento"> | string
    nomeArquivo?: StringWithAggregatesFilter<"Documento"> | string
    tipoArquivo?: StringWithAggregatesFilter<"Documento"> | string
    tamanho?: IntWithAggregatesFilter<"Documento"> | number
    url?: StringWithAggregatesFilter<"Documento"> | string
    descricao?: StringNullableWithAggregatesFilter<"Documento"> | string | null
    userId?: StringWithAggregatesFilter<"Documento"> | string
    transacaoId?: StringNullableWithAggregatesFilter<"Documento"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Documento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Documento"> | Date | string
  }

  export type NotificacaoWhereInput = {
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    titulo?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    tipo?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    link?: StringNullableFilter<"Notificacao"> | string | null
    userId?: StringFilter<"Notificacao"> | string
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeFilter<"Notificacao"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificacaoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    lida?: SortOrder
    link?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    titulo?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    tipo?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    link?: StringNullableFilter<"Notificacao"> | string | null
    userId?: StringFilter<"Notificacao"> | string
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeFilter<"Notificacao"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    lida?: SortOrder
    link?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificacaoCountOrderByAggregateInput
    _max?: NotificacaoMaxOrderByAggregateInput
    _min?: NotificacaoMinOrderByAggregateInput
  }

  export type NotificacaoScalarWhereWithAggregatesInput = {
    AND?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    OR?: NotificacaoScalarWhereWithAggregatesInput[]
    NOT?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notificacao"> | string
    titulo?: StringWithAggregatesFilter<"Notificacao"> | string
    mensagem?: StringWithAggregatesFilter<"Notificacao"> | string
    tipo?: StringWithAggregatesFilter<"Notificacao"> | string
    lida?: BoolWithAggregatesFilter<"Notificacao"> | boolean
    link?: StringNullableWithAggregatesFilter<"Notificacao"> | string | null
    userId?: StringWithAggregatesFilter<"Notificacao"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transacoes?: TransacaoCreateNestedManyWithoutUserInput
    categorias?: CategoriaCreateNestedManyWithoutUserInput
    metas?: MetaCreateNestedManyWithoutUserInput
    orcamentos?: OrcamentoCreateNestedManyWithoutUserInput
    documentos?: DocumentoCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
    contas?: ContaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutUserInput
    categorias?: CategoriaUncheckedCreateNestedManyWithoutUserInput
    metas?: MetaUncheckedCreateNestedManyWithoutUserInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutUserInput
    documentos?: DocumentoUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
    contas?: ContaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transacoes?: TransacaoUpdateManyWithoutUserNestedInput
    categorias?: CategoriaUpdateManyWithoutUserNestedInput
    metas?: MetaUpdateManyWithoutUserNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutUserNestedInput
    documentos?: DocumentoUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
    contas?: ContaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transacoes?: TransacaoUncheckedUpdateManyWithoutUserNestedInput
    categorias?: CategoriaUncheckedUpdateManyWithoutUserNestedInput
    metas?: MetaUncheckedUpdateManyWithoutUserNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutUserNestedInput
    documentos?: DocumentoUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
    contas?: ContaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransacaoCreateInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransacoesInput
    categoria?: CategoriaCreateNestedOneWithoutTransacoesInput
    conta?: ContaCreateNestedOneWithoutTransacoesInput
    meta?: MetaCreateNestedOneWithoutTransacoesInput
    documentos?: DocumentoCreateNestedManyWithoutTransacaoInput
  }

  export type TransacaoUncheckedCreateInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    userId: string
    categoriaId?: string | null
    contaId?: string | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documentos?: DocumentoUncheckedCreateNestedManyWithoutTransacaoInput
  }

  export type TransacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransacoesNestedInput
    categoria?: CategoriaUpdateOneWithoutTransacoesNestedInput
    conta?: ContaUpdateOneWithoutTransacoesNestedInput
    meta?: MetaUpdateOneWithoutTransacoesNestedInput
    documentos?: DocumentoUpdateManyWithoutTransacaoNestedInput
  }

  export type TransacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    categoriaId?: NullableStringFieldUpdateOperationsInput | string | null
    contaId?: NullableStringFieldUpdateOperationsInput | string | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentos?: DocumentoUncheckedUpdateManyWithoutTransacaoNestedInput
  }

  export type TransacaoCreateManyInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    userId: string
    categoriaId?: string | null
    contaId?: string | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    categoriaId?: NullableStringFieldUpdateOperationsInput | string | null
    contaId?: NullableStringFieldUpdateOperationsInput | string | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    tipo: $Enums.CategoriaTipo
    cor?: string
    icone?: string
    orcamentoPadrao?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriasInput
    transacoes?: TransacaoCreateNestedManyWithoutCategoriaInput
    orcamentos?: OrcamentoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    tipo: $Enums.CategoriaTipo
    cor?: string
    icone?: string
    orcamentoPadrao?: Decimal | DecimalJsLike | number | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutCategoriaInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumCategoriaTipoFieldUpdateOperationsInput | $Enums.CategoriaTipo
    cor?: StringFieldUpdateOperationsInput | string
    icone?: StringFieldUpdateOperationsInput | string
    orcamentoPadrao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriasNestedInput
    transacoes?: TransacaoUpdateManyWithoutCategoriaNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumCategoriaTipoFieldUpdateOperationsInput | $Enums.CategoriaTipo
    cor?: StringFieldUpdateOperationsInput | string
    icone?: StringFieldUpdateOperationsInput | string
    orcamentoPadrao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transacoes?: TransacaoUncheckedUpdateManyWithoutCategoriaNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: string
    nome: string
    descricao?: string | null
    tipo: $Enums.CategoriaTipo
    cor?: string
    icone?: string
    orcamentoPadrao?: Decimal | DecimalJsLike | number | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumCategoriaTipoFieldUpdateOperationsInput | $Enums.CategoriaTipo
    cor?: StringFieldUpdateOperationsInput | string
    icone?: StringFieldUpdateOperationsInput | string
    orcamentoPadrao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumCategoriaTipoFieldUpdateOperationsInput | $Enums.CategoriaTipo
    cor?: StringFieldUpdateOperationsInput | string
    icone?: StringFieldUpdateOperationsInput | string
    orcamentoPadrao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContaCreateInput = {
    id?: string
    nome: string
    instituicao: string
    tipo: string
    saldoInicial?: Decimal | DecimalJsLike | number | string
    saldoAtual: Decimal | DecimalJsLike | number | string
    cor?: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContasInput
    transacoes?: TransacaoCreateNestedManyWithoutContaInput
  }

  export type ContaUncheckedCreateInput = {
    id?: string
    nome: string
    instituicao: string
    tipo: string
    saldoInicial?: Decimal | DecimalJsLike | number | string
    saldoAtual: Decimal | DecimalJsLike | number | string
    cor?: string
    ativo?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutContaInput
  }

  export type ContaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    instituicao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cor?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContasNestedInput
    transacoes?: TransacaoUpdateManyWithoutContaNestedInput
  }

  export type ContaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    instituicao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cor?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transacoes?: TransacaoUncheckedUpdateManyWithoutContaNestedInput
  }

  export type ContaCreateManyInput = {
    id?: string
    nome: string
    instituicao: string
    tipo: string
    saldoInicial?: Decimal | DecimalJsLike | number | string
    saldoAtual: Decimal | DecimalJsLike | number | string
    cor?: string
    ativo?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    instituicao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cor?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    instituicao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cor?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    valorAlvo: Decimal | DecimalJsLike | number | string
    valorAtual?: Decimal | DecimalJsLike | number | string
    dataInicio: Date | string
    dataFim: Date | string
    periodicidade?: $Enums.PeriodicidadeMeta
    cor?: string
    concluida?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMetasInput
    transacoes?: TransacaoCreateNestedManyWithoutMetaInput
  }

  export type MetaUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    valorAlvo: Decimal | DecimalJsLike | number | string
    valorAtual?: Decimal | DecimalJsLike | number | string
    dataInicio: Date | string
    dataFim: Date | string
    periodicidade?: $Enums.PeriodicidadeMeta
    cor?: string
    concluida?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorAlvo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    periodicidade?: EnumPeriodicidadeMetaFieldUpdateOperationsInput | $Enums.PeriodicidadeMeta
    cor?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMetasNestedInput
    transacoes?: TransacaoUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorAlvo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    periodicidade?: EnumPeriodicidadeMetaFieldUpdateOperationsInput | $Enums.PeriodicidadeMeta
    cor?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transacoes?: TransacaoUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type MetaCreateManyInput = {
    id?: string
    titulo: string
    descricao?: string | null
    valorAlvo: Decimal | DecimalJsLike | number | string
    valorAtual?: Decimal | DecimalJsLike | number | string
    dataInicio: Date | string
    dataFim: Date | string
    periodicidade?: $Enums.PeriodicidadeMeta
    cor?: string
    concluida?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorAlvo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    periodicidade?: EnumPeriodicidadeMetaFieldUpdateOperationsInput | $Enums.PeriodicidadeMeta
    cor?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorAlvo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    periodicidade?: EnumPeriodicidadeMetaFieldUpdateOperationsInput | $Enums.PeriodicidadeMeta
    cor?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoCreateInput = {
    id?: string
    mes: number
    ano: number
    valor: Decimal | DecimalJsLike | number | string
    valorUtilizado?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrcamentosInput
    categoria: CategoriaCreateNestedOneWithoutOrcamentosInput
  }

  export type OrcamentoUncheckedCreateInput = {
    id?: string
    mes: number
    ano: number
    valor: Decimal | DecimalJsLike | number | string
    valorUtilizado?: Decimal | DecimalJsLike | number | string
    userId: string
    categoriaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrcamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorUtilizado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrcamentosNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutOrcamentosNestedInput
  }

  export type OrcamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorUtilizado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoCreateManyInput = {
    id?: string
    mes: number
    ano: number
    valor: Decimal | DecimalJsLike | number | string
    valorUtilizado?: Decimal | DecimalJsLike | number | string
    userId: string
    categoriaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrcamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorUtilizado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorUtilizado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoCreateInput = {
    id?: string
    nomeArquivo: string
    tipoArquivo: string
    tamanho: number
    url: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDocumentosInput
    transacao?: TransacaoCreateNestedOneWithoutDocumentosInput
  }

  export type DocumentoUncheckedCreateInput = {
    id?: string
    nomeArquivo: string
    tipoArquivo: string
    tamanho: number
    url: string
    descricao?: string | null
    userId: string
    transacaoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    tipoArquivo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentosNestedInput
    transacao?: TransacaoUpdateOneWithoutDocumentosNestedInput
  }

  export type DocumentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    tipoArquivo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    transacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoCreateManyInput = {
    id?: string
    nomeArquivo: string
    tipoArquivo: string
    tamanho: number
    url: string
    descricao?: string | null
    userId: string
    transacaoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    tipoArquivo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    tipoArquivo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    transacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateInput = {
    id?: string
    titulo: string
    mensagem: string
    tipo: string
    lida?: boolean
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateInput = {
    id?: string
    titulo: string
    mensagem: string
    tipo: string
    lida?: boolean
    link?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateManyInput = {
    id?: string
    titulo: string
    mensagem: string
    tipo: string
    lida?: boolean
    link?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TransacaoListRelationFilter = {
    every?: TransacaoWhereInput
    some?: TransacaoWhereInput
    none?: TransacaoWhereInput
  }

  export type CategoriaListRelationFilter = {
    every?: CategoriaWhereInput
    some?: CategoriaWhereInput
    none?: CategoriaWhereInput
  }

  export type MetaListRelationFilter = {
    every?: MetaWhereInput
    some?: MetaWhereInput
    none?: MetaWhereInput
  }

  export type OrcamentoListRelationFilter = {
    every?: OrcamentoWhereInput
    some?: OrcamentoWhereInput
    none?: OrcamentoWhereInput
  }

  export type DocumentoListRelationFilter = {
    every?: DocumentoWhereInput
    some?: DocumentoWhereInput
    none?: DocumentoWhereInput
  }

  export type NotificacaoListRelationFilter = {
    every?: NotificacaoWhereInput
    some?: NotificacaoWhereInput
    none?: NotificacaoWhereInput
  }

  export type ContaListRelationFilter = {
    every?: ContaWhereInput
    some?: ContaWhereInput
    none?: ContaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrcamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    dataNascimento?: SortOrder
    avatarUrl?: SortOrder
    ativo?: SortOrder
    emailVerificado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    dataNascimento?: SortOrder
    avatarUrl?: SortOrder
    ativo?: SortOrder
    emailVerificado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    dataNascimento?: SortOrder
    avatarUrl?: SortOrder
    ativo?: SortOrder
    emailVerificado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumTipoTransacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTransacao | EnumTipoTransacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTransacao[] | ListEnumTipoTransacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTransacao[] | ListEnumTipoTransacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTransacaoFilter<$PrismaModel> | $Enums.TipoTransacao
  }

  export type EnumStatusTransacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTransacao | EnumStatusTransacaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTransacao[] | ListEnumStatusTransacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTransacao[] | ListEnumStatusTransacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTransacaoFilter<$PrismaModel> | $Enums.StatusTransacao
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoriaNullableScalarRelationFilter = {
    is?: CategoriaWhereInput | null
    isNot?: CategoriaWhereInput | null
  }

  export type ContaNullableScalarRelationFilter = {
    is?: ContaWhereInput | null
    isNot?: ContaWhereInput | null
  }

  export type MetaNullableScalarRelationFilter = {
    is?: MetaWhereInput | null
    isNot?: MetaWhereInput | null
  }

  export type TransacaoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    status?: SortOrder
    observacoes?: SortOrder
    tags?: SortOrder
    recorrente?: SortOrder
    recorrenciaId?: SortOrder
    userId?: SortOrder
    categoriaId?: SortOrder
    contaId?: SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransacaoAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type TransacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    status?: SortOrder
    observacoes?: SortOrder
    recorrente?: SortOrder
    recorrenciaId?: SortOrder
    userId?: SortOrder
    categoriaId?: SortOrder
    contaId?: SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransacaoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    status?: SortOrder
    observacoes?: SortOrder
    recorrente?: SortOrder
    recorrenciaId?: SortOrder
    userId?: SortOrder
    categoriaId?: SortOrder
    contaId?: SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransacaoSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumTipoTransacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTransacao | EnumTipoTransacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTransacao[] | ListEnumTipoTransacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTransacao[] | ListEnumTipoTransacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTransacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoTransacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoTransacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoTransacaoFilter<$PrismaModel>
  }

  export type EnumStatusTransacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTransacao | EnumStatusTransacaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTransacao[] | ListEnumStatusTransacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTransacao[] | ListEnumStatusTransacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTransacaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusTransacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTransacaoFilter<$PrismaModel>
    _max?: NestedEnumStatusTransacaoFilter<$PrismaModel>
  }

  export type EnumCategoriaTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaTipo | EnumCategoriaTipoFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaTipo[] | ListEnumCategoriaTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoriaTipo[] | ListEnumCategoriaTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaTipoFilter<$PrismaModel> | $Enums.CategoriaTipo
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CategoriaUserIdNomeCompoundUniqueInput = {
    userId: string
    nome: string
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    cor?: SortOrder
    icone?: SortOrder
    orcamentoPadrao?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    orcamentoPadrao?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    cor?: SortOrder
    icone?: SortOrder
    orcamentoPadrao?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    cor?: SortOrder
    icone?: SortOrder
    orcamentoPadrao?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    orcamentoPadrao?: SortOrder
  }

  export type EnumCategoriaTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaTipo | EnumCategoriaTipoFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaTipo[] | ListEnumCategoriaTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoriaTipo[] | ListEnumCategoriaTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaTipoWithAggregatesFilter<$PrismaModel> | $Enums.CategoriaTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaTipoFilter<$PrismaModel>
    _max?: NestedEnumCategoriaTipoFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ContaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    instituicao?: SortOrder
    tipo?: SortOrder
    saldoInicial?: SortOrder
    saldoAtual?: SortOrder
    cor?: SortOrder
    ativo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContaAvgOrderByAggregateInput = {
    saldoInicial?: SortOrder
    saldoAtual?: SortOrder
  }

  export type ContaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    instituicao?: SortOrder
    tipo?: SortOrder
    saldoInicial?: SortOrder
    saldoAtual?: SortOrder
    cor?: SortOrder
    ativo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    instituicao?: SortOrder
    tipo?: SortOrder
    saldoInicial?: SortOrder
    saldoAtual?: SortOrder
    cor?: SortOrder
    ativo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContaSumOrderByAggregateInput = {
    saldoInicial?: SortOrder
    saldoAtual?: SortOrder
  }

  export type EnumPeriodicidadeMetaFilter<$PrismaModel = never> = {
    equals?: $Enums.PeriodicidadeMeta | EnumPeriodicidadeMetaFieldRefInput<$PrismaModel>
    in?: $Enums.PeriodicidadeMeta[] | ListEnumPeriodicidadeMetaFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeriodicidadeMeta[] | ListEnumPeriodicidadeMetaFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodicidadeMetaFilter<$PrismaModel> | $Enums.PeriodicidadeMeta
  }

  export type MetaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    valorAlvo?: SortOrder
    valorAtual?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    periodicidade?: SortOrder
    cor?: SortOrder
    concluida?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaAvgOrderByAggregateInput = {
    valorAlvo?: SortOrder
    valorAtual?: SortOrder
  }

  export type MetaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    valorAlvo?: SortOrder
    valorAtual?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    periodicidade?: SortOrder
    cor?: SortOrder
    concluida?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    valorAlvo?: SortOrder
    valorAtual?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    periodicidade?: SortOrder
    cor?: SortOrder
    concluida?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaSumOrderByAggregateInput = {
    valorAlvo?: SortOrder
    valorAtual?: SortOrder
  }

  export type EnumPeriodicidadeMetaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeriodicidadeMeta | EnumPeriodicidadeMetaFieldRefInput<$PrismaModel>
    in?: $Enums.PeriodicidadeMeta[] | ListEnumPeriodicidadeMetaFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeriodicidadeMeta[] | ListEnumPeriodicidadeMetaFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodicidadeMetaWithAggregatesFilter<$PrismaModel> | $Enums.PeriodicidadeMeta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeriodicidadeMetaFilter<$PrismaModel>
    _max?: NestedEnumPeriodicidadeMetaFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type OrcamentoUserIdCategoriaIdMesAnoCompoundUniqueInput = {
    userId: string
    categoriaId: string
    mes: number
    ano: number
  }

  export type OrcamentoCountOrderByAggregateInput = {
    id?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    valor?: SortOrder
    valorUtilizado?: SortOrder
    userId?: SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrcamentoAvgOrderByAggregateInput = {
    mes?: SortOrder
    ano?: SortOrder
    valor?: SortOrder
    valorUtilizado?: SortOrder
  }

  export type OrcamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    valor?: SortOrder
    valorUtilizado?: SortOrder
    userId?: SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrcamentoMinOrderByAggregateInput = {
    id?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    valor?: SortOrder
    valorUtilizado?: SortOrder
    userId?: SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrcamentoSumOrderByAggregateInput = {
    mes?: SortOrder
    ano?: SortOrder
    valor?: SortOrder
    valorUtilizado?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TransacaoNullableScalarRelationFilter = {
    is?: TransacaoWhereInput | null
    isNot?: TransacaoWhereInput | null
  }

  export type DocumentoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeArquivo?: SortOrder
    tipoArquivo?: SortOrder
    tamanho?: SortOrder
    url?: SortOrder
    descricao?: SortOrder
    userId?: SortOrder
    transacaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentoAvgOrderByAggregateInput = {
    tamanho?: SortOrder
  }

  export type DocumentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeArquivo?: SortOrder
    tipoArquivo?: SortOrder
    tamanho?: SortOrder
    url?: SortOrder
    descricao?: SortOrder
    userId?: SortOrder
    transacaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeArquivo?: SortOrder
    tipoArquivo?: SortOrder
    tamanho?: SortOrder
    url?: SortOrder
    descricao?: SortOrder
    userId?: SortOrder
    transacaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentoSumOrderByAggregateInput = {
    tamanho?: SortOrder
  }

  export type NotificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    lida?: SortOrder
    link?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    lida?: SortOrder
    link?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    lida?: SortOrder
    link?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransacaoCreateNestedManyWithoutUserInput = {
    create?: XOR<TransacaoCreateWithoutUserInput, TransacaoUncheckedCreateWithoutUserInput> | TransacaoCreateWithoutUserInput[] | TransacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutUserInput | TransacaoCreateOrConnectWithoutUserInput[]
    createMany?: TransacaoCreateManyUserInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type CategoriaCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoriaCreateWithoutUserInput, CategoriaUncheckedCreateWithoutUserInput> | CategoriaCreateWithoutUserInput[] | CategoriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutUserInput | CategoriaCreateOrConnectWithoutUserInput[]
    createMany?: CategoriaCreateManyUserInputEnvelope
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type MetaCreateNestedManyWithoutUserInput = {
    create?: XOR<MetaCreateWithoutUserInput, MetaUncheckedCreateWithoutUserInput> | MetaCreateWithoutUserInput[] | MetaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetaCreateOrConnectWithoutUserInput | MetaCreateOrConnectWithoutUserInput[]
    createMany?: MetaCreateManyUserInputEnvelope
    connect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
  }

  export type OrcamentoCreateNestedManyWithoutUserInput = {
    create?: XOR<OrcamentoCreateWithoutUserInput, OrcamentoUncheckedCreateWithoutUserInput> | OrcamentoCreateWithoutUserInput[] | OrcamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutUserInput | OrcamentoCreateOrConnectWithoutUserInput[]
    createMany?: OrcamentoCreateManyUserInputEnvelope
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
  }

  export type DocumentoCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentoCreateWithoutUserInput, DocumentoUncheckedCreateWithoutUserInput> | DocumentoCreateWithoutUserInput[] | DocumentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutUserInput | DocumentoCreateOrConnectWithoutUserInput[]
    createMany?: DocumentoCreateManyUserInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type NotificacaoCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput> | NotificacaoCreateWithoutUserInput[] | NotificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUserInput | NotificacaoCreateOrConnectWithoutUserInput[]
    createMany?: NotificacaoCreateManyUserInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type ContaCreateNestedManyWithoutUserInput = {
    create?: XOR<ContaCreateWithoutUserInput, ContaUncheckedCreateWithoutUserInput> | ContaCreateWithoutUserInput[] | ContaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContaCreateOrConnectWithoutUserInput | ContaCreateOrConnectWithoutUserInput[]
    createMany?: ContaCreateManyUserInputEnvelope
    connect?: ContaWhereUniqueInput | ContaWhereUniqueInput[]
  }

  export type TransacaoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransacaoCreateWithoutUserInput, TransacaoUncheckedCreateWithoutUserInput> | TransacaoCreateWithoutUserInput[] | TransacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutUserInput | TransacaoCreateOrConnectWithoutUserInput[]
    createMany?: TransacaoCreateManyUserInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type CategoriaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoriaCreateWithoutUserInput, CategoriaUncheckedCreateWithoutUserInput> | CategoriaCreateWithoutUserInput[] | CategoriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutUserInput | CategoriaCreateOrConnectWithoutUserInput[]
    createMany?: CategoriaCreateManyUserInputEnvelope
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type MetaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MetaCreateWithoutUserInput, MetaUncheckedCreateWithoutUserInput> | MetaCreateWithoutUserInput[] | MetaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetaCreateOrConnectWithoutUserInput | MetaCreateOrConnectWithoutUserInput[]
    createMany?: MetaCreateManyUserInputEnvelope
    connect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
  }

  export type OrcamentoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrcamentoCreateWithoutUserInput, OrcamentoUncheckedCreateWithoutUserInput> | OrcamentoCreateWithoutUserInput[] | OrcamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutUserInput | OrcamentoCreateOrConnectWithoutUserInput[]
    createMany?: OrcamentoCreateManyUserInputEnvelope
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
  }

  export type DocumentoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentoCreateWithoutUserInput, DocumentoUncheckedCreateWithoutUserInput> | DocumentoCreateWithoutUserInput[] | DocumentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutUserInput | DocumentoCreateOrConnectWithoutUserInput[]
    createMany?: DocumentoCreateManyUserInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type NotificacaoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput> | NotificacaoCreateWithoutUserInput[] | NotificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUserInput | NotificacaoCreateOrConnectWithoutUserInput[]
    createMany?: NotificacaoCreateManyUserInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type ContaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContaCreateWithoutUserInput, ContaUncheckedCreateWithoutUserInput> | ContaCreateWithoutUserInput[] | ContaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContaCreateOrConnectWithoutUserInput | ContaCreateOrConnectWithoutUserInput[]
    createMany?: ContaCreateManyUserInputEnvelope
    connect?: ContaWhereUniqueInput | ContaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransacaoUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransacaoCreateWithoutUserInput, TransacaoUncheckedCreateWithoutUserInput> | TransacaoCreateWithoutUserInput[] | TransacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutUserInput | TransacaoCreateOrConnectWithoutUserInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutUserInput | TransacaoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransacaoCreateManyUserInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutUserInput | TransacaoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutUserInput | TransacaoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type CategoriaUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoriaCreateWithoutUserInput, CategoriaUncheckedCreateWithoutUserInput> | CategoriaCreateWithoutUserInput[] | CategoriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutUserInput | CategoriaCreateOrConnectWithoutUserInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutUserInput | CategoriaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoriaCreateManyUserInputEnvelope
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutUserInput | CategoriaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutUserInput | CategoriaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type MetaUpdateManyWithoutUserNestedInput = {
    create?: XOR<MetaCreateWithoutUserInput, MetaUncheckedCreateWithoutUserInput> | MetaCreateWithoutUserInput[] | MetaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetaCreateOrConnectWithoutUserInput | MetaCreateOrConnectWithoutUserInput[]
    upsert?: MetaUpsertWithWhereUniqueWithoutUserInput | MetaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MetaCreateManyUserInputEnvelope
    set?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    disconnect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    delete?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    connect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    update?: MetaUpdateWithWhereUniqueWithoutUserInput | MetaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MetaUpdateManyWithWhereWithoutUserInput | MetaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MetaScalarWhereInput | MetaScalarWhereInput[]
  }

  export type OrcamentoUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrcamentoCreateWithoutUserInput, OrcamentoUncheckedCreateWithoutUserInput> | OrcamentoCreateWithoutUserInput[] | OrcamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutUserInput | OrcamentoCreateOrConnectWithoutUserInput[]
    upsert?: OrcamentoUpsertWithWhereUniqueWithoutUserInput | OrcamentoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrcamentoCreateManyUserInputEnvelope
    set?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    disconnect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    delete?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    update?: OrcamentoUpdateWithWhereUniqueWithoutUserInput | OrcamentoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrcamentoUpdateManyWithWhereWithoutUserInput | OrcamentoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
  }

  export type DocumentoUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentoCreateWithoutUserInput, DocumentoUncheckedCreateWithoutUserInput> | DocumentoCreateWithoutUserInput[] | DocumentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutUserInput | DocumentoCreateOrConnectWithoutUserInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutUserInput | DocumentoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentoCreateManyUserInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutUserInput | DocumentoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutUserInput | DocumentoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type NotificacaoUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput> | NotificacaoCreateWithoutUserInput[] | NotificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUserInput | NotificacaoCreateOrConnectWithoutUserInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUserInput | NotificacaoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificacaoCreateManyUserInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUserInput | NotificacaoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUserInput | NotificacaoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type ContaUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContaCreateWithoutUserInput, ContaUncheckedCreateWithoutUserInput> | ContaCreateWithoutUserInput[] | ContaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContaCreateOrConnectWithoutUserInput | ContaCreateOrConnectWithoutUserInput[]
    upsert?: ContaUpsertWithWhereUniqueWithoutUserInput | ContaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContaCreateManyUserInputEnvelope
    set?: ContaWhereUniqueInput | ContaWhereUniqueInput[]
    disconnect?: ContaWhereUniqueInput | ContaWhereUniqueInput[]
    delete?: ContaWhereUniqueInput | ContaWhereUniqueInput[]
    connect?: ContaWhereUniqueInput | ContaWhereUniqueInput[]
    update?: ContaUpdateWithWhereUniqueWithoutUserInput | ContaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContaUpdateManyWithWhereWithoutUserInput | ContaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContaScalarWhereInput | ContaScalarWhereInput[]
  }

  export type TransacaoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransacaoCreateWithoutUserInput, TransacaoUncheckedCreateWithoutUserInput> | TransacaoCreateWithoutUserInput[] | TransacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutUserInput | TransacaoCreateOrConnectWithoutUserInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutUserInput | TransacaoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransacaoCreateManyUserInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutUserInput | TransacaoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutUserInput | TransacaoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type CategoriaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoriaCreateWithoutUserInput, CategoriaUncheckedCreateWithoutUserInput> | CategoriaCreateWithoutUserInput[] | CategoriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutUserInput | CategoriaCreateOrConnectWithoutUserInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutUserInput | CategoriaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoriaCreateManyUserInputEnvelope
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutUserInput | CategoriaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutUserInput | CategoriaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type MetaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MetaCreateWithoutUserInput, MetaUncheckedCreateWithoutUserInput> | MetaCreateWithoutUserInput[] | MetaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetaCreateOrConnectWithoutUserInput | MetaCreateOrConnectWithoutUserInput[]
    upsert?: MetaUpsertWithWhereUniqueWithoutUserInput | MetaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MetaCreateManyUserInputEnvelope
    set?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    disconnect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    delete?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    connect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    update?: MetaUpdateWithWhereUniqueWithoutUserInput | MetaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MetaUpdateManyWithWhereWithoutUserInput | MetaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MetaScalarWhereInput | MetaScalarWhereInput[]
  }

  export type OrcamentoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrcamentoCreateWithoutUserInput, OrcamentoUncheckedCreateWithoutUserInput> | OrcamentoCreateWithoutUserInput[] | OrcamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutUserInput | OrcamentoCreateOrConnectWithoutUserInput[]
    upsert?: OrcamentoUpsertWithWhereUniqueWithoutUserInput | OrcamentoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrcamentoCreateManyUserInputEnvelope
    set?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    disconnect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    delete?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    update?: OrcamentoUpdateWithWhereUniqueWithoutUserInput | OrcamentoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrcamentoUpdateManyWithWhereWithoutUserInput | OrcamentoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
  }

  export type DocumentoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentoCreateWithoutUserInput, DocumentoUncheckedCreateWithoutUserInput> | DocumentoCreateWithoutUserInput[] | DocumentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutUserInput | DocumentoCreateOrConnectWithoutUserInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutUserInput | DocumentoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentoCreateManyUserInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutUserInput | DocumentoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutUserInput | DocumentoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type NotificacaoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput> | NotificacaoCreateWithoutUserInput[] | NotificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUserInput | NotificacaoCreateOrConnectWithoutUserInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUserInput | NotificacaoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificacaoCreateManyUserInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUserInput | NotificacaoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUserInput | NotificacaoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type ContaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContaCreateWithoutUserInput, ContaUncheckedCreateWithoutUserInput> | ContaCreateWithoutUserInput[] | ContaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContaCreateOrConnectWithoutUserInput | ContaCreateOrConnectWithoutUserInput[]
    upsert?: ContaUpsertWithWhereUniqueWithoutUserInput | ContaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContaCreateManyUserInputEnvelope
    set?: ContaWhereUniqueInput | ContaWhereUniqueInput[]
    disconnect?: ContaWhereUniqueInput | ContaWhereUniqueInput[]
    delete?: ContaWhereUniqueInput | ContaWhereUniqueInput[]
    connect?: ContaWhereUniqueInput | ContaWhereUniqueInput[]
    update?: ContaUpdateWithWhereUniqueWithoutUserInput | ContaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContaUpdateManyWithWhereWithoutUserInput | ContaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContaScalarWhereInput | ContaScalarWhereInput[]
  }

  export type TransacaoCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutTransacoesInput = {
    create?: XOR<UserCreateWithoutTransacoesInput, UserUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransacoesInput
    connect?: UserWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutTransacoesInput = {
    create?: XOR<CategoriaCreateWithoutTransacoesInput, CategoriaUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutTransacoesInput
    connect?: CategoriaWhereUniqueInput
  }

  export type ContaCreateNestedOneWithoutTransacoesInput = {
    create?: XOR<ContaCreateWithoutTransacoesInput, ContaUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: ContaCreateOrConnectWithoutTransacoesInput
    connect?: ContaWhereUniqueInput
  }

  export type MetaCreateNestedOneWithoutTransacoesInput = {
    create?: XOR<MetaCreateWithoutTransacoesInput, MetaUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: MetaCreateOrConnectWithoutTransacoesInput
    connect?: MetaWhereUniqueInput
  }

  export type DocumentoCreateNestedManyWithoutTransacaoInput = {
    create?: XOR<DocumentoCreateWithoutTransacaoInput, DocumentoUncheckedCreateWithoutTransacaoInput> | DocumentoCreateWithoutTransacaoInput[] | DocumentoUncheckedCreateWithoutTransacaoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutTransacaoInput | DocumentoCreateOrConnectWithoutTransacaoInput[]
    createMany?: DocumentoCreateManyTransacaoInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type DocumentoUncheckedCreateNestedManyWithoutTransacaoInput = {
    create?: XOR<DocumentoCreateWithoutTransacaoInput, DocumentoUncheckedCreateWithoutTransacaoInput> | DocumentoCreateWithoutTransacaoInput[] | DocumentoUncheckedCreateWithoutTransacaoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutTransacaoInput | DocumentoCreateOrConnectWithoutTransacaoInput[]
    createMany?: DocumentoCreateManyTransacaoInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumTipoTransacaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoTransacao
  }

  export type EnumStatusTransacaoFieldUpdateOperationsInput = {
    set?: $Enums.StatusTransacao
  }

  export type TransacaoUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutTransacoesNestedInput = {
    create?: XOR<UserCreateWithoutTransacoesInput, UserUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransacoesInput
    upsert?: UserUpsertWithoutTransacoesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransacoesInput, UserUpdateWithoutTransacoesInput>, UserUncheckedUpdateWithoutTransacoesInput>
  }

  export type CategoriaUpdateOneWithoutTransacoesNestedInput = {
    create?: XOR<CategoriaCreateWithoutTransacoesInput, CategoriaUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutTransacoesInput
    upsert?: CategoriaUpsertWithoutTransacoesInput
    disconnect?: CategoriaWhereInput | boolean
    delete?: CategoriaWhereInput | boolean
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutTransacoesInput, CategoriaUpdateWithoutTransacoesInput>, CategoriaUncheckedUpdateWithoutTransacoesInput>
  }

  export type ContaUpdateOneWithoutTransacoesNestedInput = {
    create?: XOR<ContaCreateWithoutTransacoesInput, ContaUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: ContaCreateOrConnectWithoutTransacoesInput
    upsert?: ContaUpsertWithoutTransacoesInput
    disconnect?: ContaWhereInput | boolean
    delete?: ContaWhereInput | boolean
    connect?: ContaWhereUniqueInput
    update?: XOR<XOR<ContaUpdateToOneWithWhereWithoutTransacoesInput, ContaUpdateWithoutTransacoesInput>, ContaUncheckedUpdateWithoutTransacoesInput>
  }

  export type MetaUpdateOneWithoutTransacoesNestedInput = {
    create?: XOR<MetaCreateWithoutTransacoesInput, MetaUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: MetaCreateOrConnectWithoutTransacoesInput
    upsert?: MetaUpsertWithoutTransacoesInput
    disconnect?: MetaWhereInput | boolean
    delete?: MetaWhereInput | boolean
    connect?: MetaWhereUniqueInput
    update?: XOR<XOR<MetaUpdateToOneWithWhereWithoutTransacoesInput, MetaUpdateWithoutTransacoesInput>, MetaUncheckedUpdateWithoutTransacoesInput>
  }

  export type DocumentoUpdateManyWithoutTransacaoNestedInput = {
    create?: XOR<DocumentoCreateWithoutTransacaoInput, DocumentoUncheckedCreateWithoutTransacaoInput> | DocumentoCreateWithoutTransacaoInput[] | DocumentoUncheckedCreateWithoutTransacaoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutTransacaoInput | DocumentoCreateOrConnectWithoutTransacaoInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutTransacaoInput | DocumentoUpsertWithWhereUniqueWithoutTransacaoInput[]
    createMany?: DocumentoCreateManyTransacaoInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutTransacaoInput | DocumentoUpdateWithWhereUniqueWithoutTransacaoInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutTransacaoInput | DocumentoUpdateManyWithWhereWithoutTransacaoInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type DocumentoUncheckedUpdateManyWithoutTransacaoNestedInput = {
    create?: XOR<DocumentoCreateWithoutTransacaoInput, DocumentoUncheckedCreateWithoutTransacaoInput> | DocumentoCreateWithoutTransacaoInput[] | DocumentoUncheckedCreateWithoutTransacaoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutTransacaoInput | DocumentoCreateOrConnectWithoutTransacaoInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutTransacaoInput | DocumentoUpsertWithWhereUniqueWithoutTransacaoInput[]
    createMany?: DocumentoCreateManyTransacaoInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutTransacaoInput | DocumentoUpdateWithWhereUniqueWithoutTransacaoInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutTransacaoInput | DocumentoUpdateManyWithWhereWithoutTransacaoInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCategoriasInput = {
    create?: XOR<UserCreateWithoutCategoriasInput, UserUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriasInput
    connect?: UserWhereUniqueInput
  }

  export type TransacaoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<TransacaoCreateWithoutCategoriaInput, TransacaoUncheckedCreateWithoutCategoriaInput> | TransacaoCreateWithoutCategoriaInput[] | TransacaoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutCategoriaInput | TransacaoCreateOrConnectWithoutCategoriaInput[]
    createMany?: TransacaoCreateManyCategoriaInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type OrcamentoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<OrcamentoCreateWithoutCategoriaInput, OrcamentoUncheckedCreateWithoutCategoriaInput> | OrcamentoCreateWithoutCategoriaInput[] | OrcamentoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutCategoriaInput | OrcamentoCreateOrConnectWithoutCategoriaInput[]
    createMany?: OrcamentoCreateManyCategoriaInputEnvelope
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
  }

  export type TransacaoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<TransacaoCreateWithoutCategoriaInput, TransacaoUncheckedCreateWithoutCategoriaInput> | TransacaoCreateWithoutCategoriaInput[] | TransacaoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutCategoriaInput | TransacaoCreateOrConnectWithoutCategoriaInput[]
    createMany?: TransacaoCreateManyCategoriaInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type OrcamentoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<OrcamentoCreateWithoutCategoriaInput, OrcamentoUncheckedCreateWithoutCategoriaInput> | OrcamentoCreateWithoutCategoriaInput[] | OrcamentoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutCategoriaInput | OrcamentoCreateOrConnectWithoutCategoriaInput[]
    createMany?: OrcamentoCreateManyCategoriaInputEnvelope
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
  }

  export type EnumCategoriaTipoFieldUpdateOperationsInput = {
    set?: $Enums.CategoriaTipo
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutCategoriasNestedInput = {
    create?: XOR<UserCreateWithoutCategoriasInput, UserUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriasInput
    upsert?: UserUpsertWithoutCategoriasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoriasInput, UserUpdateWithoutCategoriasInput>, UserUncheckedUpdateWithoutCategoriasInput>
  }

  export type TransacaoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<TransacaoCreateWithoutCategoriaInput, TransacaoUncheckedCreateWithoutCategoriaInput> | TransacaoCreateWithoutCategoriaInput[] | TransacaoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutCategoriaInput | TransacaoCreateOrConnectWithoutCategoriaInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutCategoriaInput | TransacaoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: TransacaoCreateManyCategoriaInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutCategoriaInput | TransacaoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutCategoriaInput | TransacaoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type OrcamentoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<OrcamentoCreateWithoutCategoriaInput, OrcamentoUncheckedCreateWithoutCategoriaInput> | OrcamentoCreateWithoutCategoriaInput[] | OrcamentoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutCategoriaInput | OrcamentoCreateOrConnectWithoutCategoriaInput[]
    upsert?: OrcamentoUpsertWithWhereUniqueWithoutCategoriaInput | OrcamentoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: OrcamentoCreateManyCategoriaInputEnvelope
    set?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    disconnect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    delete?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    update?: OrcamentoUpdateWithWhereUniqueWithoutCategoriaInput | OrcamentoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: OrcamentoUpdateManyWithWhereWithoutCategoriaInput | OrcamentoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
  }

  export type TransacaoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<TransacaoCreateWithoutCategoriaInput, TransacaoUncheckedCreateWithoutCategoriaInput> | TransacaoCreateWithoutCategoriaInput[] | TransacaoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutCategoriaInput | TransacaoCreateOrConnectWithoutCategoriaInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutCategoriaInput | TransacaoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: TransacaoCreateManyCategoriaInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutCategoriaInput | TransacaoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutCategoriaInput | TransacaoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type OrcamentoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<OrcamentoCreateWithoutCategoriaInput, OrcamentoUncheckedCreateWithoutCategoriaInput> | OrcamentoCreateWithoutCategoriaInput[] | OrcamentoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutCategoriaInput | OrcamentoCreateOrConnectWithoutCategoriaInput[]
    upsert?: OrcamentoUpsertWithWhereUniqueWithoutCategoriaInput | OrcamentoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: OrcamentoCreateManyCategoriaInputEnvelope
    set?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    disconnect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    delete?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    update?: OrcamentoUpdateWithWhereUniqueWithoutCategoriaInput | OrcamentoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: OrcamentoUpdateManyWithWhereWithoutCategoriaInput | OrcamentoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContasInput = {
    create?: XOR<UserCreateWithoutContasInput, UserUncheckedCreateWithoutContasInput>
    connectOrCreate?: UserCreateOrConnectWithoutContasInput
    connect?: UserWhereUniqueInput
  }

  export type TransacaoCreateNestedManyWithoutContaInput = {
    create?: XOR<TransacaoCreateWithoutContaInput, TransacaoUncheckedCreateWithoutContaInput> | TransacaoCreateWithoutContaInput[] | TransacaoUncheckedCreateWithoutContaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutContaInput | TransacaoCreateOrConnectWithoutContaInput[]
    createMany?: TransacaoCreateManyContaInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type TransacaoUncheckedCreateNestedManyWithoutContaInput = {
    create?: XOR<TransacaoCreateWithoutContaInput, TransacaoUncheckedCreateWithoutContaInput> | TransacaoCreateWithoutContaInput[] | TransacaoUncheckedCreateWithoutContaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutContaInput | TransacaoCreateOrConnectWithoutContaInput[]
    createMany?: TransacaoCreateManyContaInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutContasNestedInput = {
    create?: XOR<UserCreateWithoutContasInput, UserUncheckedCreateWithoutContasInput>
    connectOrCreate?: UserCreateOrConnectWithoutContasInput
    upsert?: UserUpsertWithoutContasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContasInput, UserUpdateWithoutContasInput>, UserUncheckedUpdateWithoutContasInput>
  }

  export type TransacaoUpdateManyWithoutContaNestedInput = {
    create?: XOR<TransacaoCreateWithoutContaInput, TransacaoUncheckedCreateWithoutContaInput> | TransacaoCreateWithoutContaInput[] | TransacaoUncheckedCreateWithoutContaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutContaInput | TransacaoCreateOrConnectWithoutContaInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutContaInput | TransacaoUpsertWithWhereUniqueWithoutContaInput[]
    createMany?: TransacaoCreateManyContaInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutContaInput | TransacaoUpdateWithWhereUniqueWithoutContaInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutContaInput | TransacaoUpdateManyWithWhereWithoutContaInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type TransacaoUncheckedUpdateManyWithoutContaNestedInput = {
    create?: XOR<TransacaoCreateWithoutContaInput, TransacaoUncheckedCreateWithoutContaInput> | TransacaoCreateWithoutContaInput[] | TransacaoUncheckedCreateWithoutContaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutContaInput | TransacaoCreateOrConnectWithoutContaInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutContaInput | TransacaoUpsertWithWhereUniqueWithoutContaInput[]
    createMany?: TransacaoCreateManyContaInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutContaInput | TransacaoUpdateWithWhereUniqueWithoutContaInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutContaInput | TransacaoUpdateManyWithWhereWithoutContaInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMetasInput = {
    create?: XOR<UserCreateWithoutMetasInput, UserUncheckedCreateWithoutMetasInput>
    connectOrCreate?: UserCreateOrConnectWithoutMetasInput
    connect?: UserWhereUniqueInput
  }

  export type TransacaoCreateNestedManyWithoutMetaInput = {
    create?: XOR<TransacaoCreateWithoutMetaInput, TransacaoUncheckedCreateWithoutMetaInput> | TransacaoCreateWithoutMetaInput[] | TransacaoUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutMetaInput | TransacaoCreateOrConnectWithoutMetaInput[]
    createMany?: TransacaoCreateManyMetaInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type TransacaoUncheckedCreateNestedManyWithoutMetaInput = {
    create?: XOR<TransacaoCreateWithoutMetaInput, TransacaoUncheckedCreateWithoutMetaInput> | TransacaoCreateWithoutMetaInput[] | TransacaoUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutMetaInput | TransacaoCreateOrConnectWithoutMetaInput[]
    createMany?: TransacaoCreateManyMetaInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type EnumPeriodicidadeMetaFieldUpdateOperationsInput = {
    set?: $Enums.PeriodicidadeMeta
  }

  export type UserUpdateOneRequiredWithoutMetasNestedInput = {
    create?: XOR<UserCreateWithoutMetasInput, UserUncheckedCreateWithoutMetasInput>
    connectOrCreate?: UserCreateOrConnectWithoutMetasInput
    upsert?: UserUpsertWithoutMetasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMetasInput, UserUpdateWithoutMetasInput>, UserUncheckedUpdateWithoutMetasInput>
  }

  export type TransacaoUpdateManyWithoutMetaNestedInput = {
    create?: XOR<TransacaoCreateWithoutMetaInput, TransacaoUncheckedCreateWithoutMetaInput> | TransacaoCreateWithoutMetaInput[] | TransacaoUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutMetaInput | TransacaoCreateOrConnectWithoutMetaInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutMetaInput | TransacaoUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: TransacaoCreateManyMetaInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutMetaInput | TransacaoUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutMetaInput | TransacaoUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type TransacaoUncheckedUpdateManyWithoutMetaNestedInput = {
    create?: XOR<TransacaoCreateWithoutMetaInput, TransacaoUncheckedCreateWithoutMetaInput> | TransacaoCreateWithoutMetaInput[] | TransacaoUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutMetaInput | TransacaoCreateOrConnectWithoutMetaInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutMetaInput | TransacaoUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: TransacaoCreateManyMetaInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutMetaInput | TransacaoUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutMetaInput | TransacaoUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrcamentosInput = {
    create?: XOR<UserCreateWithoutOrcamentosInput, UserUncheckedCreateWithoutOrcamentosInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrcamentosInput
    connect?: UserWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutOrcamentosInput = {
    create?: XOR<CategoriaCreateWithoutOrcamentosInput, CategoriaUncheckedCreateWithoutOrcamentosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutOrcamentosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutOrcamentosNestedInput = {
    create?: XOR<UserCreateWithoutOrcamentosInput, UserUncheckedCreateWithoutOrcamentosInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrcamentosInput
    upsert?: UserUpsertWithoutOrcamentosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrcamentosInput, UserUpdateWithoutOrcamentosInput>, UserUncheckedUpdateWithoutOrcamentosInput>
  }

  export type CategoriaUpdateOneRequiredWithoutOrcamentosNestedInput = {
    create?: XOR<CategoriaCreateWithoutOrcamentosInput, CategoriaUncheckedCreateWithoutOrcamentosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutOrcamentosInput
    upsert?: CategoriaUpsertWithoutOrcamentosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutOrcamentosInput, CategoriaUpdateWithoutOrcamentosInput>, CategoriaUncheckedUpdateWithoutOrcamentosInput>
  }

  export type UserCreateNestedOneWithoutDocumentosInput = {
    create?: XOR<UserCreateWithoutDocumentosInput, UserUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentosInput
    connect?: UserWhereUniqueInput
  }

  export type TransacaoCreateNestedOneWithoutDocumentosInput = {
    create?: XOR<TransacaoCreateWithoutDocumentosInput, TransacaoUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: TransacaoCreateOrConnectWithoutDocumentosInput
    connect?: TransacaoWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDocumentosNestedInput = {
    create?: XOR<UserCreateWithoutDocumentosInput, UserUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentosInput
    upsert?: UserUpsertWithoutDocumentosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentosInput, UserUpdateWithoutDocumentosInput>, UserUncheckedUpdateWithoutDocumentosInput>
  }

  export type TransacaoUpdateOneWithoutDocumentosNestedInput = {
    create?: XOR<TransacaoCreateWithoutDocumentosInput, TransacaoUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: TransacaoCreateOrConnectWithoutDocumentosInput
    upsert?: TransacaoUpsertWithoutDocumentosInput
    disconnect?: TransacaoWhereInput | boolean
    delete?: TransacaoWhereInput | boolean
    connect?: TransacaoWhereUniqueInput
    update?: XOR<XOR<TransacaoUpdateToOneWithWhereWithoutDocumentosInput, TransacaoUpdateWithoutDocumentosInput>, TransacaoUncheckedUpdateWithoutDocumentosInput>
  }

  export type UserCreateNestedOneWithoutNotificacoesInput = {
    create?: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificacoesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificacoesNestedInput = {
    create?: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificacoesInput
    upsert?: UserUpsertWithoutNotificacoesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificacoesInput, UserUpdateWithoutNotificacoesInput>, UserUncheckedUpdateWithoutNotificacoesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumTipoTransacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTransacao | EnumTipoTransacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTransacao[] | ListEnumTipoTransacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTransacao[] | ListEnumTipoTransacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTransacaoFilter<$PrismaModel> | $Enums.TipoTransacao
  }

  export type NestedEnumStatusTransacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTransacao | EnumStatusTransacaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTransacao[] | ListEnumStatusTransacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTransacao[] | ListEnumStatusTransacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTransacaoFilter<$PrismaModel> | $Enums.StatusTransacao
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTipoTransacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTransacao | EnumTipoTransacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTransacao[] | ListEnumTipoTransacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTransacao[] | ListEnumTipoTransacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTransacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoTransacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoTransacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoTransacaoFilter<$PrismaModel>
  }

  export type NestedEnumStatusTransacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTransacao | EnumStatusTransacaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTransacao[] | ListEnumStatusTransacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTransacao[] | ListEnumStatusTransacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTransacaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusTransacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTransacaoFilter<$PrismaModel>
    _max?: NestedEnumStatusTransacaoFilter<$PrismaModel>
  }

  export type NestedEnumCategoriaTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaTipo | EnumCategoriaTipoFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaTipo[] | ListEnumCategoriaTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoriaTipo[] | ListEnumCategoriaTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaTipoFilter<$PrismaModel> | $Enums.CategoriaTipo
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumCategoriaTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaTipo | EnumCategoriaTipoFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaTipo[] | ListEnumCategoriaTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoriaTipo[] | ListEnumCategoriaTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaTipoWithAggregatesFilter<$PrismaModel> | $Enums.CategoriaTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaTipoFilter<$PrismaModel>
    _max?: NestedEnumCategoriaTipoFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumPeriodicidadeMetaFilter<$PrismaModel = never> = {
    equals?: $Enums.PeriodicidadeMeta | EnumPeriodicidadeMetaFieldRefInput<$PrismaModel>
    in?: $Enums.PeriodicidadeMeta[] | ListEnumPeriodicidadeMetaFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeriodicidadeMeta[] | ListEnumPeriodicidadeMetaFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodicidadeMetaFilter<$PrismaModel> | $Enums.PeriodicidadeMeta
  }

  export type NestedEnumPeriodicidadeMetaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeriodicidadeMeta | EnumPeriodicidadeMetaFieldRefInput<$PrismaModel>
    in?: $Enums.PeriodicidadeMeta[] | ListEnumPeriodicidadeMetaFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeriodicidadeMeta[] | ListEnumPeriodicidadeMetaFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodicidadeMetaWithAggregatesFilter<$PrismaModel> | $Enums.PeriodicidadeMeta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeriodicidadeMetaFilter<$PrismaModel>
    _max?: NestedEnumPeriodicidadeMetaFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TransacaoCreateWithoutUserInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria?: CategoriaCreateNestedOneWithoutTransacoesInput
    conta?: ContaCreateNestedOneWithoutTransacoesInput
    meta?: MetaCreateNestedOneWithoutTransacoesInput
    documentos?: DocumentoCreateNestedManyWithoutTransacaoInput
  }

  export type TransacaoUncheckedCreateWithoutUserInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    categoriaId?: string | null
    contaId?: string | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documentos?: DocumentoUncheckedCreateNestedManyWithoutTransacaoInput
  }

  export type TransacaoCreateOrConnectWithoutUserInput = {
    where: TransacaoWhereUniqueInput
    create: XOR<TransacaoCreateWithoutUserInput, TransacaoUncheckedCreateWithoutUserInput>
  }

  export type TransacaoCreateManyUserInputEnvelope = {
    data: TransacaoCreateManyUserInput | TransacaoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaCreateWithoutUserInput = {
    id?: string
    nome: string
    descricao?: string | null
    tipo: $Enums.CategoriaTipo
    cor?: string
    icone?: string
    orcamentoPadrao?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transacoes?: TransacaoCreateNestedManyWithoutCategoriaInput
    orcamentos?: OrcamentoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutUserInput = {
    id?: string
    nome: string
    descricao?: string | null
    tipo: $Enums.CategoriaTipo
    cor?: string
    icone?: string
    orcamentoPadrao?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutCategoriaInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutUserInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutUserInput, CategoriaUncheckedCreateWithoutUserInput>
  }

  export type CategoriaCreateManyUserInputEnvelope = {
    data: CategoriaCreateManyUserInput | CategoriaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MetaCreateWithoutUserInput = {
    id?: string
    titulo: string
    descricao?: string | null
    valorAlvo: Decimal | DecimalJsLike | number | string
    valorAtual?: Decimal | DecimalJsLike | number | string
    dataInicio: Date | string
    dataFim: Date | string
    periodicidade?: $Enums.PeriodicidadeMeta
    cor?: string
    concluida?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transacoes?: TransacaoCreateNestedManyWithoutMetaInput
  }

  export type MetaUncheckedCreateWithoutUserInput = {
    id?: string
    titulo: string
    descricao?: string | null
    valorAlvo: Decimal | DecimalJsLike | number | string
    valorAtual?: Decimal | DecimalJsLike | number | string
    dataInicio: Date | string
    dataFim: Date | string
    periodicidade?: $Enums.PeriodicidadeMeta
    cor?: string
    concluida?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaCreateOrConnectWithoutUserInput = {
    where: MetaWhereUniqueInput
    create: XOR<MetaCreateWithoutUserInput, MetaUncheckedCreateWithoutUserInput>
  }

  export type MetaCreateManyUserInputEnvelope = {
    data: MetaCreateManyUserInput | MetaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrcamentoCreateWithoutUserInput = {
    id?: string
    mes: number
    ano: number
    valor: Decimal | DecimalJsLike | number | string
    valorUtilizado?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutOrcamentosInput
  }

  export type OrcamentoUncheckedCreateWithoutUserInput = {
    id?: string
    mes: number
    ano: number
    valor: Decimal | DecimalJsLike | number | string
    valorUtilizado?: Decimal | DecimalJsLike | number | string
    categoriaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrcamentoCreateOrConnectWithoutUserInput = {
    where: OrcamentoWhereUniqueInput
    create: XOR<OrcamentoCreateWithoutUserInput, OrcamentoUncheckedCreateWithoutUserInput>
  }

  export type OrcamentoCreateManyUserInputEnvelope = {
    data: OrcamentoCreateManyUserInput | OrcamentoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DocumentoCreateWithoutUserInput = {
    id?: string
    nomeArquivo: string
    tipoArquivo: string
    tamanho: number
    url: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transacao?: TransacaoCreateNestedOneWithoutDocumentosInput
  }

  export type DocumentoUncheckedCreateWithoutUserInput = {
    id?: string
    nomeArquivo: string
    tipoArquivo: string
    tamanho: number
    url: string
    descricao?: string | null
    transacaoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentoCreateOrConnectWithoutUserInput = {
    where: DocumentoWhereUniqueInput
    create: XOR<DocumentoCreateWithoutUserInput, DocumentoUncheckedCreateWithoutUserInput>
  }

  export type DocumentoCreateManyUserInputEnvelope = {
    data: DocumentoCreateManyUserInput | DocumentoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificacaoCreateWithoutUserInput = {
    id?: string
    titulo: string
    mensagem: string
    tipo: string
    lida?: boolean
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoUncheckedCreateWithoutUserInput = {
    id?: string
    titulo: string
    mensagem: string
    tipo: string
    lida?: boolean
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoCreateOrConnectWithoutUserInput = {
    where: NotificacaoWhereUniqueInput
    create: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput>
  }

  export type NotificacaoCreateManyUserInputEnvelope = {
    data: NotificacaoCreateManyUserInput | NotificacaoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContaCreateWithoutUserInput = {
    id?: string
    nome: string
    instituicao: string
    tipo: string
    saldoInicial?: Decimal | DecimalJsLike | number | string
    saldoAtual: Decimal | DecimalJsLike | number | string
    cor?: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transacoes?: TransacaoCreateNestedManyWithoutContaInput
  }

  export type ContaUncheckedCreateWithoutUserInput = {
    id?: string
    nome: string
    instituicao: string
    tipo: string
    saldoInicial?: Decimal | DecimalJsLike | number | string
    saldoAtual: Decimal | DecimalJsLike | number | string
    cor?: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutContaInput
  }

  export type ContaCreateOrConnectWithoutUserInput = {
    where: ContaWhereUniqueInput
    create: XOR<ContaCreateWithoutUserInput, ContaUncheckedCreateWithoutUserInput>
  }

  export type ContaCreateManyUserInputEnvelope = {
    data: ContaCreateManyUserInput | ContaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransacaoUpsertWithWhereUniqueWithoutUserInput = {
    where: TransacaoWhereUniqueInput
    update: XOR<TransacaoUpdateWithoutUserInput, TransacaoUncheckedUpdateWithoutUserInput>
    create: XOR<TransacaoCreateWithoutUserInput, TransacaoUncheckedCreateWithoutUserInput>
  }

  export type TransacaoUpdateWithWhereUniqueWithoutUserInput = {
    where: TransacaoWhereUniqueInput
    data: XOR<TransacaoUpdateWithoutUserInput, TransacaoUncheckedUpdateWithoutUserInput>
  }

  export type TransacaoUpdateManyWithWhereWithoutUserInput = {
    where: TransacaoScalarWhereInput
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyWithoutUserInput>
  }

  export type TransacaoScalarWhereInput = {
    AND?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
    OR?: TransacaoScalarWhereInput[]
    NOT?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
    id?: StringFilter<"Transacao"> | string
    descricao?: StringFilter<"Transacao"> | string
    valor?: DecimalFilter<"Transacao"> | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFilter<"Transacao"> | $Enums.TipoTransacao
    data?: DateTimeFilter<"Transacao"> | Date | string
    status?: EnumStatusTransacaoFilter<"Transacao"> | $Enums.StatusTransacao
    observacoes?: StringNullableFilter<"Transacao"> | string | null
    tags?: StringNullableListFilter<"Transacao">
    recorrente?: BoolFilter<"Transacao"> | boolean
    recorrenciaId?: StringNullableFilter<"Transacao"> | string | null
    userId?: StringFilter<"Transacao"> | string
    categoriaId?: StringNullableFilter<"Transacao"> | string | null
    contaId?: StringNullableFilter<"Transacao"> | string | null
    metaId?: StringNullableFilter<"Transacao"> | string | null
    createdAt?: DateTimeFilter<"Transacao"> | Date | string
    updatedAt?: DateTimeFilter<"Transacao"> | Date | string
  }

  export type CategoriaUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoriaWhereUniqueInput
    update: XOR<CategoriaUpdateWithoutUserInput, CategoriaUncheckedUpdateWithoutUserInput>
    create: XOR<CategoriaCreateWithoutUserInput, CategoriaUncheckedCreateWithoutUserInput>
  }

  export type CategoriaUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoriaWhereUniqueInput
    data: XOR<CategoriaUpdateWithoutUserInput, CategoriaUncheckedUpdateWithoutUserInput>
  }

  export type CategoriaUpdateManyWithWhereWithoutUserInput = {
    where: CategoriaScalarWhereInput
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoriaScalarWhereInput = {
    AND?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    OR?: CategoriaScalarWhereInput[]
    NOT?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    id?: StringFilter<"Categoria"> | string
    nome?: StringFilter<"Categoria"> | string
    descricao?: StringNullableFilter<"Categoria"> | string | null
    tipo?: EnumCategoriaTipoFilter<"Categoria"> | $Enums.CategoriaTipo
    cor?: StringFilter<"Categoria"> | string
    icone?: StringFilter<"Categoria"> | string
    orcamentoPadrao?: DecimalNullableFilter<"Categoria"> | Decimal | DecimalJsLike | number | string | null
    userId?: StringFilter<"Categoria"> | string
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
  }

  export type MetaUpsertWithWhereUniqueWithoutUserInput = {
    where: MetaWhereUniqueInput
    update: XOR<MetaUpdateWithoutUserInput, MetaUncheckedUpdateWithoutUserInput>
    create: XOR<MetaCreateWithoutUserInput, MetaUncheckedCreateWithoutUserInput>
  }

  export type MetaUpdateWithWhereUniqueWithoutUserInput = {
    where: MetaWhereUniqueInput
    data: XOR<MetaUpdateWithoutUserInput, MetaUncheckedUpdateWithoutUserInput>
  }

  export type MetaUpdateManyWithWhereWithoutUserInput = {
    where: MetaScalarWhereInput
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyWithoutUserInput>
  }

  export type MetaScalarWhereInput = {
    AND?: MetaScalarWhereInput | MetaScalarWhereInput[]
    OR?: MetaScalarWhereInput[]
    NOT?: MetaScalarWhereInput | MetaScalarWhereInput[]
    id?: StringFilter<"Meta"> | string
    titulo?: StringFilter<"Meta"> | string
    descricao?: StringNullableFilter<"Meta"> | string | null
    valorAlvo?: DecimalFilter<"Meta"> | Decimal | DecimalJsLike | number | string
    valorAtual?: DecimalFilter<"Meta"> | Decimal | DecimalJsLike | number | string
    dataInicio?: DateTimeFilter<"Meta"> | Date | string
    dataFim?: DateTimeFilter<"Meta"> | Date | string
    periodicidade?: EnumPeriodicidadeMetaFilter<"Meta"> | $Enums.PeriodicidadeMeta
    cor?: StringFilter<"Meta"> | string
    concluida?: BoolFilter<"Meta"> | boolean
    userId?: StringFilter<"Meta"> | string
    createdAt?: DateTimeFilter<"Meta"> | Date | string
    updatedAt?: DateTimeFilter<"Meta"> | Date | string
  }

  export type OrcamentoUpsertWithWhereUniqueWithoutUserInput = {
    where: OrcamentoWhereUniqueInput
    update: XOR<OrcamentoUpdateWithoutUserInput, OrcamentoUncheckedUpdateWithoutUserInput>
    create: XOR<OrcamentoCreateWithoutUserInput, OrcamentoUncheckedCreateWithoutUserInput>
  }

  export type OrcamentoUpdateWithWhereUniqueWithoutUserInput = {
    where: OrcamentoWhereUniqueInput
    data: XOR<OrcamentoUpdateWithoutUserInput, OrcamentoUncheckedUpdateWithoutUserInput>
  }

  export type OrcamentoUpdateManyWithWhereWithoutUserInput = {
    where: OrcamentoScalarWhereInput
    data: XOR<OrcamentoUpdateManyMutationInput, OrcamentoUncheckedUpdateManyWithoutUserInput>
  }

  export type OrcamentoScalarWhereInput = {
    AND?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
    OR?: OrcamentoScalarWhereInput[]
    NOT?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
    id?: StringFilter<"Orcamento"> | string
    mes?: IntFilter<"Orcamento"> | number
    ano?: IntFilter<"Orcamento"> | number
    valor?: DecimalFilter<"Orcamento"> | Decimal | DecimalJsLike | number | string
    valorUtilizado?: DecimalFilter<"Orcamento"> | Decimal | DecimalJsLike | number | string
    userId?: StringFilter<"Orcamento"> | string
    categoriaId?: StringFilter<"Orcamento"> | string
    createdAt?: DateTimeFilter<"Orcamento"> | Date | string
    updatedAt?: DateTimeFilter<"Orcamento"> | Date | string
  }

  export type DocumentoUpsertWithWhereUniqueWithoutUserInput = {
    where: DocumentoWhereUniqueInput
    update: XOR<DocumentoUpdateWithoutUserInput, DocumentoUncheckedUpdateWithoutUserInput>
    create: XOR<DocumentoCreateWithoutUserInput, DocumentoUncheckedCreateWithoutUserInput>
  }

  export type DocumentoUpdateWithWhereUniqueWithoutUserInput = {
    where: DocumentoWhereUniqueInput
    data: XOR<DocumentoUpdateWithoutUserInput, DocumentoUncheckedUpdateWithoutUserInput>
  }

  export type DocumentoUpdateManyWithWhereWithoutUserInput = {
    where: DocumentoScalarWhereInput
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyWithoutUserInput>
  }

  export type DocumentoScalarWhereInput = {
    AND?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
    OR?: DocumentoScalarWhereInput[]
    NOT?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
    id?: StringFilter<"Documento"> | string
    nomeArquivo?: StringFilter<"Documento"> | string
    tipoArquivo?: StringFilter<"Documento"> | string
    tamanho?: IntFilter<"Documento"> | number
    url?: StringFilter<"Documento"> | string
    descricao?: StringNullableFilter<"Documento"> | string | null
    userId?: StringFilter<"Documento"> | string
    transacaoId?: StringNullableFilter<"Documento"> | string | null
    createdAt?: DateTimeFilter<"Documento"> | Date | string
    updatedAt?: DateTimeFilter<"Documento"> | Date | string
  }

  export type NotificacaoUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificacaoWhereUniqueInput
    update: XOR<NotificacaoUpdateWithoutUserInput, NotificacaoUncheckedUpdateWithoutUserInput>
    create: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput>
  }

  export type NotificacaoUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificacaoWhereUniqueInput
    data: XOR<NotificacaoUpdateWithoutUserInput, NotificacaoUncheckedUpdateWithoutUserInput>
  }

  export type NotificacaoUpdateManyWithWhereWithoutUserInput = {
    where: NotificacaoScalarWhereInput
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificacaoScalarWhereInput = {
    AND?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    OR?: NotificacaoScalarWhereInput[]
    NOT?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    titulo?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    tipo?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    link?: StringNullableFilter<"Notificacao"> | string | null
    userId?: StringFilter<"Notificacao"> | string
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeFilter<"Notificacao"> | Date | string
  }

  export type ContaUpsertWithWhereUniqueWithoutUserInput = {
    where: ContaWhereUniqueInput
    update: XOR<ContaUpdateWithoutUserInput, ContaUncheckedUpdateWithoutUserInput>
    create: XOR<ContaCreateWithoutUserInput, ContaUncheckedCreateWithoutUserInput>
  }

  export type ContaUpdateWithWhereUniqueWithoutUserInput = {
    where: ContaWhereUniqueInput
    data: XOR<ContaUpdateWithoutUserInput, ContaUncheckedUpdateWithoutUserInput>
  }

  export type ContaUpdateManyWithWhereWithoutUserInput = {
    where: ContaScalarWhereInput
    data: XOR<ContaUpdateManyMutationInput, ContaUncheckedUpdateManyWithoutUserInput>
  }

  export type ContaScalarWhereInput = {
    AND?: ContaScalarWhereInput | ContaScalarWhereInput[]
    OR?: ContaScalarWhereInput[]
    NOT?: ContaScalarWhereInput | ContaScalarWhereInput[]
    id?: StringFilter<"Conta"> | string
    nome?: StringFilter<"Conta"> | string
    instituicao?: StringFilter<"Conta"> | string
    tipo?: StringFilter<"Conta"> | string
    saldoInicial?: DecimalFilter<"Conta"> | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFilter<"Conta"> | Decimal | DecimalJsLike | number | string
    cor?: StringFilter<"Conta"> | string
    ativo?: BoolFilter<"Conta"> | boolean
    userId?: StringFilter<"Conta"> | string
    createdAt?: DateTimeFilter<"Conta"> | Date | string
    updatedAt?: DateTimeFilter<"Conta"> | Date | string
  }

  export type UserCreateWithoutTransacoesInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    categorias?: CategoriaCreateNestedManyWithoutUserInput
    metas?: MetaCreateNestedManyWithoutUserInput
    orcamentos?: OrcamentoCreateNestedManyWithoutUserInput
    documentos?: DocumentoCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
    contas?: ContaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransacoesInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    categorias?: CategoriaUncheckedCreateNestedManyWithoutUserInput
    metas?: MetaUncheckedCreateNestedManyWithoutUserInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutUserInput
    documentos?: DocumentoUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
    contas?: ContaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransacoesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransacoesInput, UserUncheckedCreateWithoutTransacoesInput>
  }

  export type CategoriaCreateWithoutTransacoesInput = {
    id?: string
    nome: string
    descricao?: string | null
    tipo: $Enums.CategoriaTipo
    cor?: string
    icone?: string
    orcamentoPadrao?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriasInput
    orcamentos?: OrcamentoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutTransacoesInput = {
    id?: string
    nome: string
    descricao?: string | null
    tipo: $Enums.CategoriaTipo
    cor?: string
    icone?: string
    orcamentoPadrao?: Decimal | DecimalJsLike | number | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutTransacoesInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutTransacoesInput, CategoriaUncheckedCreateWithoutTransacoesInput>
  }

  export type ContaCreateWithoutTransacoesInput = {
    id?: string
    nome: string
    instituicao: string
    tipo: string
    saldoInicial?: Decimal | DecimalJsLike | number | string
    saldoAtual: Decimal | DecimalJsLike | number | string
    cor?: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContasInput
  }

  export type ContaUncheckedCreateWithoutTransacoesInput = {
    id?: string
    nome: string
    instituicao: string
    tipo: string
    saldoInicial?: Decimal | DecimalJsLike | number | string
    saldoAtual: Decimal | DecimalJsLike | number | string
    cor?: string
    ativo?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContaCreateOrConnectWithoutTransacoesInput = {
    where: ContaWhereUniqueInput
    create: XOR<ContaCreateWithoutTransacoesInput, ContaUncheckedCreateWithoutTransacoesInput>
  }

  export type MetaCreateWithoutTransacoesInput = {
    id?: string
    titulo: string
    descricao?: string | null
    valorAlvo: Decimal | DecimalJsLike | number | string
    valorAtual?: Decimal | DecimalJsLike | number | string
    dataInicio: Date | string
    dataFim: Date | string
    periodicidade?: $Enums.PeriodicidadeMeta
    cor?: string
    concluida?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMetasInput
  }

  export type MetaUncheckedCreateWithoutTransacoesInput = {
    id?: string
    titulo: string
    descricao?: string | null
    valorAlvo: Decimal | DecimalJsLike | number | string
    valorAtual?: Decimal | DecimalJsLike | number | string
    dataInicio: Date | string
    dataFim: Date | string
    periodicidade?: $Enums.PeriodicidadeMeta
    cor?: string
    concluida?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaCreateOrConnectWithoutTransacoesInput = {
    where: MetaWhereUniqueInput
    create: XOR<MetaCreateWithoutTransacoesInput, MetaUncheckedCreateWithoutTransacoesInput>
  }

  export type DocumentoCreateWithoutTransacaoInput = {
    id?: string
    nomeArquivo: string
    tipoArquivo: string
    tamanho: number
    url: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDocumentosInput
  }

  export type DocumentoUncheckedCreateWithoutTransacaoInput = {
    id?: string
    nomeArquivo: string
    tipoArquivo: string
    tamanho: number
    url: string
    descricao?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentoCreateOrConnectWithoutTransacaoInput = {
    where: DocumentoWhereUniqueInput
    create: XOR<DocumentoCreateWithoutTransacaoInput, DocumentoUncheckedCreateWithoutTransacaoInput>
  }

  export type DocumentoCreateManyTransacaoInputEnvelope = {
    data: DocumentoCreateManyTransacaoInput | DocumentoCreateManyTransacaoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTransacoesInput = {
    update: XOR<UserUpdateWithoutTransacoesInput, UserUncheckedUpdateWithoutTransacoesInput>
    create: XOR<UserCreateWithoutTransacoesInput, UserUncheckedCreateWithoutTransacoesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransacoesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransacoesInput, UserUncheckedUpdateWithoutTransacoesInput>
  }

  export type UserUpdateWithoutTransacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categorias?: CategoriaUpdateManyWithoutUserNestedInput
    metas?: MetaUpdateManyWithoutUserNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutUserNestedInput
    documentos?: DocumentoUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
    contas?: ContaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categorias?: CategoriaUncheckedUpdateManyWithoutUserNestedInput
    metas?: MetaUncheckedUpdateManyWithoutUserNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutUserNestedInput
    documentos?: DocumentoUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
    contas?: ContaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoriaUpsertWithoutTransacoesInput = {
    update: XOR<CategoriaUpdateWithoutTransacoesInput, CategoriaUncheckedUpdateWithoutTransacoesInput>
    create: XOR<CategoriaCreateWithoutTransacoesInput, CategoriaUncheckedCreateWithoutTransacoesInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutTransacoesInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutTransacoesInput, CategoriaUncheckedUpdateWithoutTransacoesInput>
  }

  export type CategoriaUpdateWithoutTransacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumCategoriaTipoFieldUpdateOperationsInput | $Enums.CategoriaTipo
    cor?: StringFieldUpdateOperationsInput | string
    icone?: StringFieldUpdateOperationsInput | string
    orcamentoPadrao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriasNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutTransacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumCategoriaTipoFieldUpdateOperationsInput | $Enums.CategoriaTipo
    cor?: StringFieldUpdateOperationsInput | string
    icone?: StringFieldUpdateOperationsInput | string
    orcamentoPadrao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type ContaUpsertWithoutTransacoesInput = {
    update: XOR<ContaUpdateWithoutTransacoesInput, ContaUncheckedUpdateWithoutTransacoesInput>
    create: XOR<ContaCreateWithoutTransacoesInput, ContaUncheckedCreateWithoutTransacoesInput>
    where?: ContaWhereInput
  }

  export type ContaUpdateToOneWithWhereWithoutTransacoesInput = {
    where?: ContaWhereInput
    data: XOR<ContaUpdateWithoutTransacoesInput, ContaUncheckedUpdateWithoutTransacoesInput>
  }

  export type ContaUpdateWithoutTransacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    instituicao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cor?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContasNestedInput
  }

  export type ContaUncheckedUpdateWithoutTransacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    instituicao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cor?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaUpsertWithoutTransacoesInput = {
    update: XOR<MetaUpdateWithoutTransacoesInput, MetaUncheckedUpdateWithoutTransacoesInput>
    create: XOR<MetaCreateWithoutTransacoesInput, MetaUncheckedCreateWithoutTransacoesInput>
    where?: MetaWhereInput
  }

  export type MetaUpdateToOneWithWhereWithoutTransacoesInput = {
    where?: MetaWhereInput
    data: XOR<MetaUpdateWithoutTransacoesInput, MetaUncheckedUpdateWithoutTransacoesInput>
  }

  export type MetaUpdateWithoutTransacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorAlvo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    periodicidade?: EnumPeriodicidadeMetaFieldUpdateOperationsInput | $Enums.PeriodicidadeMeta
    cor?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMetasNestedInput
  }

  export type MetaUncheckedUpdateWithoutTransacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorAlvo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    periodicidade?: EnumPeriodicidadeMetaFieldUpdateOperationsInput | $Enums.PeriodicidadeMeta
    cor?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoUpsertWithWhereUniqueWithoutTransacaoInput = {
    where: DocumentoWhereUniqueInput
    update: XOR<DocumentoUpdateWithoutTransacaoInput, DocumentoUncheckedUpdateWithoutTransacaoInput>
    create: XOR<DocumentoCreateWithoutTransacaoInput, DocumentoUncheckedCreateWithoutTransacaoInput>
  }

  export type DocumentoUpdateWithWhereUniqueWithoutTransacaoInput = {
    where: DocumentoWhereUniqueInput
    data: XOR<DocumentoUpdateWithoutTransacaoInput, DocumentoUncheckedUpdateWithoutTransacaoInput>
  }

  export type DocumentoUpdateManyWithWhereWithoutTransacaoInput = {
    where: DocumentoScalarWhereInput
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyWithoutTransacaoInput>
  }

  export type UserCreateWithoutCategoriasInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transacoes?: TransacaoCreateNestedManyWithoutUserInput
    metas?: MetaCreateNestedManyWithoutUserInput
    orcamentos?: OrcamentoCreateNestedManyWithoutUserInput
    documentos?: DocumentoCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
    contas?: ContaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoriasInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutUserInput
    metas?: MetaUncheckedCreateNestedManyWithoutUserInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutUserInput
    documentos?: DocumentoUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
    contas?: ContaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoriasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoriasInput, UserUncheckedCreateWithoutCategoriasInput>
  }

  export type TransacaoCreateWithoutCategoriaInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransacoesInput
    conta?: ContaCreateNestedOneWithoutTransacoesInput
    meta?: MetaCreateNestedOneWithoutTransacoesInput
    documentos?: DocumentoCreateNestedManyWithoutTransacaoInput
  }

  export type TransacaoUncheckedCreateWithoutCategoriaInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    userId: string
    contaId?: string | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documentos?: DocumentoUncheckedCreateNestedManyWithoutTransacaoInput
  }

  export type TransacaoCreateOrConnectWithoutCategoriaInput = {
    where: TransacaoWhereUniqueInput
    create: XOR<TransacaoCreateWithoutCategoriaInput, TransacaoUncheckedCreateWithoutCategoriaInput>
  }

  export type TransacaoCreateManyCategoriaInputEnvelope = {
    data: TransacaoCreateManyCategoriaInput | TransacaoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type OrcamentoCreateWithoutCategoriaInput = {
    id?: string
    mes: number
    ano: number
    valor: Decimal | DecimalJsLike | number | string
    valorUtilizado?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrcamentosInput
  }

  export type OrcamentoUncheckedCreateWithoutCategoriaInput = {
    id?: string
    mes: number
    ano: number
    valor: Decimal | DecimalJsLike | number | string
    valorUtilizado?: Decimal | DecimalJsLike | number | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrcamentoCreateOrConnectWithoutCategoriaInput = {
    where: OrcamentoWhereUniqueInput
    create: XOR<OrcamentoCreateWithoutCategoriaInput, OrcamentoUncheckedCreateWithoutCategoriaInput>
  }

  export type OrcamentoCreateManyCategoriaInputEnvelope = {
    data: OrcamentoCreateManyCategoriaInput | OrcamentoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCategoriasInput = {
    update: XOR<UserUpdateWithoutCategoriasInput, UserUncheckedUpdateWithoutCategoriasInput>
    create: XOR<UserCreateWithoutCategoriasInput, UserUncheckedCreateWithoutCategoriasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoriasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoriasInput, UserUncheckedUpdateWithoutCategoriasInput>
  }

  export type UserUpdateWithoutCategoriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transacoes?: TransacaoUpdateManyWithoutUserNestedInput
    metas?: MetaUpdateManyWithoutUserNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutUserNestedInput
    documentos?: DocumentoUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
    contas?: ContaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transacoes?: TransacaoUncheckedUpdateManyWithoutUserNestedInput
    metas?: MetaUncheckedUpdateManyWithoutUserNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutUserNestedInput
    documentos?: DocumentoUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
    contas?: ContaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransacaoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: TransacaoWhereUniqueInput
    update: XOR<TransacaoUpdateWithoutCategoriaInput, TransacaoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<TransacaoCreateWithoutCategoriaInput, TransacaoUncheckedCreateWithoutCategoriaInput>
  }

  export type TransacaoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: TransacaoWhereUniqueInput
    data: XOR<TransacaoUpdateWithoutCategoriaInput, TransacaoUncheckedUpdateWithoutCategoriaInput>
  }

  export type TransacaoUpdateManyWithWhereWithoutCategoriaInput = {
    where: TransacaoScalarWhereInput
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type OrcamentoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: OrcamentoWhereUniqueInput
    update: XOR<OrcamentoUpdateWithoutCategoriaInput, OrcamentoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<OrcamentoCreateWithoutCategoriaInput, OrcamentoUncheckedCreateWithoutCategoriaInput>
  }

  export type OrcamentoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: OrcamentoWhereUniqueInput
    data: XOR<OrcamentoUpdateWithoutCategoriaInput, OrcamentoUncheckedUpdateWithoutCategoriaInput>
  }

  export type OrcamentoUpdateManyWithWhereWithoutCategoriaInput = {
    where: OrcamentoScalarWhereInput
    data: XOR<OrcamentoUpdateManyMutationInput, OrcamentoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type UserCreateWithoutContasInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transacoes?: TransacaoCreateNestedManyWithoutUserInput
    categorias?: CategoriaCreateNestedManyWithoutUserInput
    metas?: MetaCreateNestedManyWithoutUserInput
    orcamentos?: OrcamentoCreateNestedManyWithoutUserInput
    documentos?: DocumentoCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContasInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutUserInput
    categorias?: CategoriaUncheckedCreateNestedManyWithoutUserInput
    metas?: MetaUncheckedCreateNestedManyWithoutUserInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutUserInput
    documentos?: DocumentoUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContasInput, UserUncheckedCreateWithoutContasInput>
  }

  export type TransacaoCreateWithoutContaInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransacoesInput
    categoria?: CategoriaCreateNestedOneWithoutTransacoesInput
    meta?: MetaCreateNestedOneWithoutTransacoesInput
    documentos?: DocumentoCreateNestedManyWithoutTransacaoInput
  }

  export type TransacaoUncheckedCreateWithoutContaInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    userId: string
    categoriaId?: string | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documentos?: DocumentoUncheckedCreateNestedManyWithoutTransacaoInput
  }

  export type TransacaoCreateOrConnectWithoutContaInput = {
    where: TransacaoWhereUniqueInput
    create: XOR<TransacaoCreateWithoutContaInput, TransacaoUncheckedCreateWithoutContaInput>
  }

  export type TransacaoCreateManyContaInputEnvelope = {
    data: TransacaoCreateManyContaInput | TransacaoCreateManyContaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutContasInput = {
    update: XOR<UserUpdateWithoutContasInput, UserUncheckedUpdateWithoutContasInput>
    create: XOR<UserCreateWithoutContasInput, UserUncheckedCreateWithoutContasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContasInput, UserUncheckedUpdateWithoutContasInput>
  }

  export type UserUpdateWithoutContasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transacoes?: TransacaoUpdateManyWithoutUserNestedInput
    categorias?: CategoriaUpdateManyWithoutUserNestedInput
    metas?: MetaUpdateManyWithoutUserNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutUserNestedInput
    documentos?: DocumentoUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transacoes?: TransacaoUncheckedUpdateManyWithoutUserNestedInput
    categorias?: CategoriaUncheckedUpdateManyWithoutUserNestedInput
    metas?: MetaUncheckedUpdateManyWithoutUserNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutUserNestedInput
    documentos?: DocumentoUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransacaoUpsertWithWhereUniqueWithoutContaInput = {
    where: TransacaoWhereUniqueInput
    update: XOR<TransacaoUpdateWithoutContaInput, TransacaoUncheckedUpdateWithoutContaInput>
    create: XOR<TransacaoCreateWithoutContaInput, TransacaoUncheckedCreateWithoutContaInput>
  }

  export type TransacaoUpdateWithWhereUniqueWithoutContaInput = {
    where: TransacaoWhereUniqueInput
    data: XOR<TransacaoUpdateWithoutContaInput, TransacaoUncheckedUpdateWithoutContaInput>
  }

  export type TransacaoUpdateManyWithWhereWithoutContaInput = {
    where: TransacaoScalarWhereInput
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyWithoutContaInput>
  }

  export type UserCreateWithoutMetasInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transacoes?: TransacaoCreateNestedManyWithoutUserInput
    categorias?: CategoriaCreateNestedManyWithoutUserInput
    orcamentos?: OrcamentoCreateNestedManyWithoutUserInput
    documentos?: DocumentoCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
    contas?: ContaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMetasInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutUserInput
    categorias?: CategoriaUncheckedCreateNestedManyWithoutUserInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutUserInput
    documentos?: DocumentoUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
    contas?: ContaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMetasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMetasInput, UserUncheckedCreateWithoutMetasInput>
  }

  export type TransacaoCreateWithoutMetaInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransacoesInput
    categoria?: CategoriaCreateNestedOneWithoutTransacoesInput
    conta?: ContaCreateNestedOneWithoutTransacoesInput
    documentos?: DocumentoCreateNestedManyWithoutTransacaoInput
  }

  export type TransacaoUncheckedCreateWithoutMetaInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    userId: string
    categoriaId?: string | null
    contaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documentos?: DocumentoUncheckedCreateNestedManyWithoutTransacaoInput
  }

  export type TransacaoCreateOrConnectWithoutMetaInput = {
    where: TransacaoWhereUniqueInput
    create: XOR<TransacaoCreateWithoutMetaInput, TransacaoUncheckedCreateWithoutMetaInput>
  }

  export type TransacaoCreateManyMetaInputEnvelope = {
    data: TransacaoCreateManyMetaInput | TransacaoCreateManyMetaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMetasInput = {
    update: XOR<UserUpdateWithoutMetasInput, UserUncheckedUpdateWithoutMetasInput>
    create: XOR<UserCreateWithoutMetasInput, UserUncheckedCreateWithoutMetasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMetasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMetasInput, UserUncheckedUpdateWithoutMetasInput>
  }

  export type UserUpdateWithoutMetasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transacoes?: TransacaoUpdateManyWithoutUserNestedInput
    categorias?: CategoriaUpdateManyWithoutUserNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutUserNestedInput
    documentos?: DocumentoUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
    contas?: ContaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMetasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transacoes?: TransacaoUncheckedUpdateManyWithoutUserNestedInput
    categorias?: CategoriaUncheckedUpdateManyWithoutUserNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutUserNestedInput
    documentos?: DocumentoUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
    contas?: ContaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransacaoUpsertWithWhereUniqueWithoutMetaInput = {
    where: TransacaoWhereUniqueInput
    update: XOR<TransacaoUpdateWithoutMetaInput, TransacaoUncheckedUpdateWithoutMetaInput>
    create: XOR<TransacaoCreateWithoutMetaInput, TransacaoUncheckedCreateWithoutMetaInput>
  }

  export type TransacaoUpdateWithWhereUniqueWithoutMetaInput = {
    where: TransacaoWhereUniqueInput
    data: XOR<TransacaoUpdateWithoutMetaInput, TransacaoUncheckedUpdateWithoutMetaInput>
  }

  export type TransacaoUpdateManyWithWhereWithoutMetaInput = {
    where: TransacaoScalarWhereInput
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyWithoutMetaInput>
  }

  export type UserCreateWithoutOrcamentosInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transacoes?: TransacaoCreateNestedManyWithoutUserInput
    categorias?: CategoriaCreateNestedManyWithoutUserInput
    metas?: MetaCreateNestedManyWithoutUserInput
    documentos?: DocumentoCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
    contas?: ContaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrcamentosInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutUserInput
    categorias?: CategoriaUncheckedCreateNestedManyWithoutUserInput
    metas?: MetaUncheckedCreateNestedManyWithoutUserInput
    documentos?: DocumentoUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
    contas?: ContaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrcamentosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrcamentosInput, UserUncheckedCreateWithoutOrcamentosInput>
  }

  export type CategoriaCreateWithoutOrcamentosInput = {
    id?: string
    nome: string
    descricao?: string | null
    tipo: $Enums.CategoriaTipo
    cor?: string
    icone?: string
    orcamentoPadrao?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriasInput
    transacoes?: TransacaoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutOrcamentosInput = {
    id?: string
    nome: string
    descricao?: string | null
    tipo: $Enums.CategoriaTipo
    cor?: string
    icone?: string
    orcamentoPadrao?: Decimal | DecimalJsLike | number | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutOrcamentosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutOrcamentosInput, CategoriaUncheckedCreateWithoutOrcamentosInput>
  }

  export type UserUpsertWithoutOrcamentosInput = {
    update: XOR<UserUpdateWithoutOrcamentosInput, UserUncheckedUpdateWithoutOrcamentosInput>
    create: XOR<UserCreateWithoutOrcamentosInput, UserUncheckedCreateWithoutOrcamentosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrcamentosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrcamentosInput, UserUncheckedUpdateWithoutOrcamentosInput>
  }

  export type UserUpdateWithoutOrcamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transacoes?: TransacaoUpdateManyWithoutUserNestedInput
    categorias?: CategoriaUpdateManyWithoutUserNestedInput
    metas?: MetaUpdateManyWithoutUserNestedInput
    documentos?: DocumentoUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
    contas?: ContaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrcamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transacoes?: TransacaoUncheckedUpdateManyWithoutUserNestedInput
    categorias?: CategoriaUncheckedUpdateManyWithoutUserNestedInput
    metas?: MetaUncheckedUpdateManyWithoutUserNestedInput
    documentos?: DocumentoUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
    contas?: ContaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoriaUpsertWithoutOrcamentosInput = {
    update: XOR<CategoriaUpdateWithoutOrcamentosInput, CategoriaUncheckedUpdateWithoutOrcamentosInput>
    create: XOR<CategoriaCreateWithoutOrcamentosInput, CategoriaUncheckedCreateWithoutOrcamentosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutOrcamentosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutOrcamentosInput, CategoriaUncheckedUpdateWithoutOrcamentosInput>
  }

  export type CategoriaUpdateWithoutOrcamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumCategoriaTipoFieldUpdateOperationsInput | $Enums.CategoriaTipo
    cor?: StringFieldUpdateOperationsInput | string
    icone?: StringFieldUpdateOperationsInput | string
    orcamentoPadrao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriasNestedInput
    transacoes?: TransacaoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutOrcamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumCategoriaTipoFieldUpdateOperationsInput | $Enums.CategoriaTipo
    cor?: StringFieldUpdateOperationsInput | string
    icone?: StringFieldUpdateOperationsInput | string
    orcamentoPadrao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transacoes?: TransacaoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type UserCreateWithoutDocumentosInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transacoes?: TransacaoCreateNestedManyWithoutUserInput
    categorias?: CategoriaCreateNestedManyWithoutUserInput
    metas?: MetaCreateNestedManyWithoutUserInput
    orcamentos?: OrcamentoCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
    contas?: ContaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDocumentosInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutUserInput
    categorias?: CategoriaUncheckedCreateNestedManyWithoutUserInput
    metas?: MetaUncheckedCreateNestedManyWithoutUserInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
    contas?: ContaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDocumentosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentosInput, UserUncheckedCreateWithoutDocumentosInput>
  }

  export type TransacaoCreateWithoutDocumentosInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransacoesInput
    categoria?: CategoriaCreateNestedOneWithoutTransacoesInput
    conta?: ContaCreateNestedOneWithoutTransacoesInput
    meta?: MetaCreateNestedOneWithoutTransacoesInput
  }

  export type TransacaoUncheckedCreateWithoutDocumentosInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    userId: string
    categoriaId?: string | null
    contaId?: string | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransacaoCreateOrConnectWithoutDocumentosInput = {
    where: TransacaoWhereUniqueInput
    create: XOR<TransacaoCreateWithoutDocumentosInput, TransacaoUncheckedCreateWithoutDocumentosInput>
  }

  export type UserUpsertWithoutDocumentosInput = {
    update: XOR<UserUpdateWithoutDocumentosInput, UserUncheckedUpdateWithoutDocumentosInput>
    create: XOR<UserCreateWithoutDocumentosInput, UserUncheckedCreateWithoutDocumentosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentosInput, UserUncheckedUpdateWithoutDocumentosInput>
  }

  export type UserUpdateWithoutDocumentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transacoes?: TransacaoUpdateManyWithoutUserNestedInput
    categorias?: CategoriaUpdateManyWithoutUserNestedInput
    metas?: MetaUpdateManyWithoutUserNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
    contas?: ContaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transacoes?: TransacaoUncheckedUpdateManyWithoutUserNestedInput
    categorias?: CategoriaUncheckedUpdateManyWithoutUserNestedInput
    metas?: MetaUncheckedUpdateManyWithoutUserNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
    contas?: ContaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransacaoUpsertWithoutDocumentosInput = {
    update: XOR<TransacaoUpdateWithoutDocumentosInput, TransacaoUncheckedUpdateWithoutDocumentosInput>
    create: XOR<TransacaoCreateWithoutDocumentosInput, TransacaoUncheckedCreateWithoutDocumentosInput>
    where?: TransacaoWhereInput
  }

  export type TransacaoUpdateToOneWithWhereWithoutDocumentosInput = {
    where?: TransacaoWhereInput
    data: XOR<TransacaoUpdateWithoutDocumentosInput, TransacaoUncheckedUpdateWithoutDocumentosInput>
  }

  export type TransacaoUpdateWithoutDocumentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransacoesNestedInput
    categoria?: CategoriaUpdateOneWithoutTransacoesNestedInput
    conta?: ContaUpdateOneWithoutTransacoesNestedInput
    meta?: MetaUpdateOneWithoutTransacoesNestedInput
  }

  export type TransacaoUncheckedUpdateWithoutDocumentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    categoriaId?: NullableStringFieldUpdateOperationsInput | string | null
    contaId?: NullableStringFieldUpdateOperationsInput | string | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutNotificacoesInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transacoes?: TransacaoCreateNestedManyWithoutUserInput
    categorias?: CategoriaCreateNestedManyWithoutUserInput
    metas?: MetaCreateNestedManyWithoutUserInput
    orcamentos?: OrcamentoCreateNestedManyWithoutUserInput
    documentos?: DocumentoCreateNestedManyWithoutUserInput
    contas?: ContaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificacoesInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cpf?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    avatarUrl?: string | null
    ativo?: boolean
    emailVerificado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutUserInput
    categorias?: CategoriaUncheckedCreateNestedManyWithoutUserInput
    metas?: MetaUncheckedCreateNestedManyWithoutUserInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutUserInput
    documentos?: DocumentoUncheckedCreateNestedManyWithoutUserInput
    contas?: ContaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificacoesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
  }

  export type UserUpsertWithoutNotificacoesInput = {
    update: XOR<UserUpdateWithoutNotificacoesInput, UserUncheckedUpdateWithoutNotificacoesInput>
    create: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificacoesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificacoesInput, UserUncheckedUpdateWithoutNotificacoesInput>
  }

  export type UserUpdateWithoutNotificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transacoes?: TransacaoUpdateManyWithoutUserNestedInput
    categorias?: CategoriaUpdateManyWithoutUserNestedInput
    metas?: MetaUpdateManyWithoutUserNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutUserNestedInput
    documentos?: DocumentoUpdateManyWithoutUserNestedInput
    contas?: ContaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    emailVerificado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transacoes?: TransacaoUncheckedUpdateManyWithoutUserNestedInput
    categorias?: CategoriaUncheckedUpdateManyWithoutUserNestedInput
    metas?: MetaUncheckedUpdateManyWithoutUserNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutUserNestedInput
    documentos?: DocumentoUncheckedUpdateManyWithoutUserNestedInput
    contas?: ContaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransacaoCreateManyUserInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    categoriaId?: string | null
    contaId?: string | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaCreateManyUserInput = {
    id?: string
    nome: string
    descricao?: string | null
    tipo: $Enums.CategoriaTipo
    cor?: string
    icone?: string
    orcamentoPadrao?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaCreateManyUserInput = {
    id?: string
    titulo: string
    descricao?: string | null
    valorAlvo: Decimal | DecimalJsLike | number | string
    valorAtual?: Decimal | DecimalJsLike | number | string
    dataInicio: Date | string
    dataFim: Date | string
    periodicidade?: $Enums.PeriodicidadeMeta
    cor?: string
    concluida?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrcamentoCreateManyUserInput = {
    id?: string
    mes: number
    ano: number
    valor: Decimal | DecimalJsLike | number | string
    valorUtilizado?: Decimal | DecimalJsLike | number | string
    categoriaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentoCreateManyUserInput = {
    id?: string
    nomeArquivo: string
    tipoArquivo: string
    tamanho: number
    url: string
    descricao?: string | null
    transacaoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoCreateManyUserInput = {
    id?: string
    titulo: string
    mensagem: string
    tipo: string
    lida?: boolean
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContaCreateManyUserInput = {
    id?: string
    nome: string
    instituicao: string
    tipo: string
    saldoInicial?: Decimal | DecimalJsLike | number | string
    saldoAtual: Decimal | DecimalJsLike | number | string
    cor?: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransacaoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneWithoutTransacoesNestedInput
    conta?: ContaUpdateOneWithoutTransacoesNestedInput
    meta?: MetaUpdateOneWithoutTransacoesNestedInput
    documentos?: DocumentoUpdateManyWithoutTransacaoNestedInput
  }

  export type TransacaoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: NullableStringFieldUpdateOperationsInput | string | null
    contaId?: NullableStringFieldUpdateOperationsInput | string | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentos?: DocumentoUncheckedUpdateManyWithoutTransacaoNestedInput
  }

  export type TransacaoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: NullableStringFieldUpdateOperationsInput | string | null
    contaId?: NullableStringFieldUpdateOperationsInput | string | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumCategoriaTipoFieldUpdateOperationsInput | $Enums.CategoriaTipo
    cor?: StringFieldUpdateOperationsInput | string
    icone?: StringFieldUpdateOperationsInput | string
    orcamentoPadrao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transacoes?: TransacaoUpdateManyWithoutCategoriaNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumCategoriaTipoFieldUpdateOperationsInput | $Enums.CategoriaTipo
    cor?: StringFieldUpdateOperationsInput | string
    icone?: StringFieldUpdateOperationsInput | string
    orcamentoPadrao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transacoes?: TransacaoUncheckedUpdateManyWithoutCategoriaNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumCategoriaTipoFieldUpdateOperationsInput | $Enums.CategoriaTipo
    cor?: StringFieldUpdateOperationsInput | string
    icone?: StringFieldUpdateOperationsInput | string
    orcamentoPadrao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorAlvo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    periodicidade?: EnumPeriodicidadeMetaFieldUpdateOperationsInput | $Enums.PeriodicidadeMeta
    cor?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transacoes?: TransacaoUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorAlvo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    periodicidade?: EnumPeriodicidadeMetaFieldUpdateOperationsInput | $Enums.PeriodicidadeMeta
    cor?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transacoes?: TransacaoUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorAlvo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    periodicidade?: EnumPeriodicidadeMetaFieldUpdateOperationsInput | $Enums.PeriodicidadeMeta
    cor?: StringFieldUpdateOperationsInput | string
    concluida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorUtilizado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutOrcamentosNestedInput
  }

  export type OrcamentoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorUtilizado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorUtilizado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    tipoArquivo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transacao?: TransacaoUpdateOneWithoutDocumentosNestedInput
  }

  export type DocumentoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    tipoArquivo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    transacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    tipoArquivo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    transacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    instituicao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cor?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transacoes?: TransacaoUpdateManyWithoutContaNestedInput
  }

  export type ContaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    instituicao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cor?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transacoes?: TransacaoUncheckedUpdateManyWithoutContaNestedInput
  }

  export type ContaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    instituicao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cor?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoCreateManyTransacaoInput = {
    id?: string
    nomeArquivo: string
    tipoArquivo: string
    tamanho: number
    url: string
    descricao?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentoUpdateWithoutTransacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    tipoArquivo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentosNestedInput
  }

  export type DocumentoUncheckedUpdateWithoutTransacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    tipoArquivo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoUncheckedUpdateManyWithoutTransacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    tipoArquivo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacaoCreateManyCategoriaInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    userId: string
    contaId?: string | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrcamentoCreateManyCategoriaInput = {
    id?: string
    mes: number
    ano: number
    valor: Decimal | DecimalJsLike | number | string
    valorUtilizado?: Decimal | DecimalJsLike | number | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransacaoUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransacoesNestedInput
    conta?: ContaUpdateOneWithoutTransacoesNestedInput
    meta?: MetaUpdateOneWithoutTransacoesNestedInput
    documentos?: DocumentoUpdateManyWithoutTransacaoNestedInput
  }

  export type TransacaoUncheckedUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    contaId?: NullableStringFieldUpdateOperationsInput | string | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentos?: DocumentoUncheckedUpdateManyWithoutTransacaoNestedInput
  }

  export type TransacaoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    contaId?: NullableStringFieldUpdateOperationsInput | string | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorUtilizado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrcamentosNestedInput
  }

  export type OrcamentoUncheckedUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorUtilizado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorUtilizado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacaoCreateManyContaInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    userId: string
    categoriaId?: string | null
    metaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransacaoUpdateWithoutContaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransacoesNestedInput
    categoria?: CategoriaUpdateOneWithoutTransacoesNestedInput
    meta?: MetaUpdateOneWithoutTransacoesNestedInput
    documentos?: DocumentoUpdateManyWithoutTransacaoNestedInput
  }

  export type TransacaoUncheckedUpdateWithoutContaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    categoriaId?: NullableStringFieldUpdateOperationsInput | string | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentos?: DocumentoUncheckedUpdateManyWithoutTransacaoNestedInput
  }

  export type TransacaoUncheckedUpdateManyWithoutContaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    categoriaId?: NullableStringFieldUpdateOperationsInput | string | null
    metaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacaoCreateManyMetaInput = {
    id?: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.TipoTransacao
    data?: Date | string
    status?: $Enums.StatusTransacao
    observacoes?: string | null
    tags?: TransacaoCreatetagsInput | string[]
    recorrente?: boolean
    recorrenciaId?: string | null
    userId: string
    categoriaId?: string | null
    contaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransacaoUpdateWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransacoesNestedInput
    categoria?: CategoriaUpdateOneWithoutTransacoesNestedInput
    conta?: ContaUpdateOneWithoutTransacoesNestedInput
    documentos?: DocumentoUpdateManyWithoutTransacaoNestedInput
  }

  export type TransacaoUncheckedUpdateWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    categoriaId?: NullableStringFieldUpdateOperationsInput | string | null
    contaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentos?: DocumentoUncheckedUpdateManyWithoutTransacaoNestedInput
  }

  export type TransacaoUncheckedUpdateManyWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: EnumTipoTransacaoFieldUpdateOperationsInput | $Enums.TipoTransacao
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTransacaoFieldUpdateOperationsInput | $Enums.StatusTransacao
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TransacaoUpdatetagsInput | string[]
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    categoriaId?: NullableStringFieldUpdateOperationsInput | string | null
    contaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}