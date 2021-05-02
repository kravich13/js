- [TextDecoder и TextEncoder](#textdecoder-и-textencoder)
  - [TextEncoder](#textencoder)

# TextDecoder и TextEncoder

Встроенный объект `TextDecoder` позволяет декодировать данные из бинарного буфера в обычную строку.

```javascript
let decoder = new TextDecoder([label], [options])
```
* `label` - тип кодировки, `utf-8` default.
* `options` - объект с доп. настройками:
    * `falal` - если `true` - генерируется ошибка для невалидных символов, в ином случае (default) они заменяются символом `\uFFD`.
    * `ignoreBOM` - если `true`, тогда игнорируется BOM (доп. признак, определяющий порядок следования байтов).


И после использовать его метод `decode`:

```javascript
let str = decoder.decode([input], [options])
```
* `input` - бинарный буфер (`BufferSource`) для декорирования.
* `options` - объект с доп. настройками: 
    * `stream` - `true` для декорирования потока данных, при этом `decoder` вызывается снова и снова для каждого следующего фрагмента данных. В этом случае многобайтовый символ может иногда быть разделён и попасть в разные фрагменты данных. Это опция указывает `TextDecoder` запомнить символ, на котором остановился процесс, и декодировать его со следующим фрагментом.

Пример: 

```javascript
let uint8Array = new Uint8Array([72, 101, 108, 108, 111])
console.log(uint8Array) // Hello
```

Можно декодировать часть бинарного массива, создав подмассив: 

```javascript
let uint8Array = new Uint8Array([0, 72, 101, 108, 108, 111, 0])

// возьмем строку из середины массива
let binaryString = uint8Array.subarray(1, -1)

console.log(new TextDecoder().decode(binaryString))
```
***

## TextEncoder

`TextEncoder` поступает наоборот - кодирует строку в бинарный массив.

```javascript
let encoder = new TextEncoder()
```

Поддерживается только кодировка `utf-8`.

Имеет два метода: 
* `encode(str)` - возвращает бинарный массив `Uint8Array`, содержащий закодированную строку.
* `encodeInto(str, destination)` - кодирует строку `str` и помещает её в `destination`, который должен быть эксземпляром `Uint8Array`.

```javascript
let encoder = new TextEncoder()

let uint8Array = encoder.encode("Hello")
console.log(uint8Array) // [ 72, 101, 108, 108, 111 ]
```

