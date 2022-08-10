# Rust 
### Rust 生成 wasm 二进制文件
- rust lib
```sh
   # 安装 wasm-pack  编译 wasm 文件
```
- rust Cargo.toml

```toml
[dependencies]
wasm-bindgen = "0.2.78"
wee_alloc = "0.4.5"

[lib]
crate-type = ["cdylib"]

[package.metadata.wasm-pack.profile.release]
wasm-opt = false
```
- 生成 hello
```sh
   wasm-pack build
```


