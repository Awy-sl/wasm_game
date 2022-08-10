use wasm_bindgen::prelude::*;


// 暴露给 外部 js 调用
#[wasm_bindgen]
extern  "C"{
    pub fn alert(s: &str);
}

// 声明给 外部  js 调用
#[wasm_bindgen]
pub fn hello (name: &str) {
    alert(name);
}