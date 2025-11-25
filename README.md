### Имя команды: ts-pair-cosmosstudios

#### Участники:

1. Котельников Даниил Андреевич  - fayerflash
2. Жмеренчук Александр Анатольевич - mddrm6 

#### Библиотеки для валидации форм:

1) Zod (40.7к звезд, с2020 года, последний коммит 18.11.2025, понятная и компактная документация)
2) Yup (23.6к звезд, с 2014 года, последний коммит 22.09.2025, в документации много примеров и понятное описание)
3) Validator.js (23.7к звезд,с 2018 года, последний коммит 10.11.2025, мало примеров в документации)
4) Just-Validate (578 звезд, с 2016 года, последний коммит 3.09.2025, объемная и хорошо структурированная документация)
5) Parsley.js (9к звезд, с 2014 года, последний коммит 12.10.2022, документация без пояснений)

#### Установка: 

npm install zod 

#### Точка входа: 

imoprt from "zod";

#### Минимально необходимый набор для начала валидации: 

```
const User = z.object({
  name: z.string(),
});

const input = { ... };
const data = User.parse(input);
```

#### Методы: 

```
mySchema.parse(data);
mySchema.safeParse(data);
mySchema.parseAsync(data);
mySchema.safeParseAsync(data);
 
 
// refinements
mySchema.refine(refinementFunc);
mySchema.superRefine(refinementFunc); // deprecated, use .check()
mySchema.overwrite(overwriteFunc);
 
// wrappers
mySchema.optional();
mySchema.nonoptional();
mySchema.nullable();
mySchema.nullish();
mySchema.default(defaultValue);
mySchema.array();
mySchema.or(otherSchema);
mySchema.transform(transformFunc);
mySchema.catch(catchValue);
mySchema.pipe(otherSchema);
mySchema.readonly();
 
// metadata and registries
mySchema.register(registry, metadata);
mySchema.describe(description);
mySchema.meta(metadata);
 
// utilities
mySchema.check(checkOrFunction);
mySchema.clone(def);
mySchema.brand<T>();
mySchema.isOptional(); // boolean
mySchema.isNullable(); // boolean
```