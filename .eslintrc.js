module.exports = {
    // 默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。
    // 为了将 ESLint 限制到一个特定的项目，在你项目根目录设置 "root": true。
    // ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
    root: true,
    parser: 'babel-eslint',
    // 设置解析器选项
    parserOptions: {
        // 指定ECMAScript支持的版本,2015（同 6），2016（同 7），或 2017（同 8）
        "ecmaVersion": 8,
        // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
        "sourceType": "module",
        // 你想使用的额外的语言特性
        "ecmaFeatures": {
            "jsx": true // 启动JSX
        },
    },
    // 指定脚本的运行环境
    env: {
        // 支持除模块外所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
        // "es6": true, 
        "browser": true,
        "node": true,
        "commonjs": true
    },
    // 脚本在执行期间访问的额外的全局变量
    // 当访问未定义的变量时，no-undef 规则将发出警告。
    // 如果你想指定这些变量不应被重写（只读），你可以将它们设置为 false
    globals: {
        "window": true,
        "document": true,
        "$": true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    //  设置插件
    plugins: [
        // 'html'
    ],
    settings: {
        'html/html-extensions': ['.html', '.wpy']
    },
    // 启用的规则及各自的错误级别
    // "off" 或 0 - 关闭规则 
    // "warn" 或 1 - 开启规则， 使用警告级别的错误： warn(不会导致程序退出)
    // "error" 或 2 - 开启规则， 使用错误级别的错误： error(当被触发的时候， 程序会退出)
    'rules': {
        //  常见错误
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // 禁止条件表达式中出现赋值操作符
        "no-cond-assign": 2,
        // 禁止 function 定义中出现重名参数
        "no-dupe-args": 2,
        // 禁止对象字面量中出现重复的 key
        "no-dupe-keys": 2,
        // 禁止对 function 声明重新赋值
        "no-func-assign": 2,
        // 禁止正则表达式字面量中出现多个空格
        "no-regex-spaces": 2,
        // 禁止出现令人困惑的多行表达式
        "no-unexpected-multiline": 2,
        // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
        "no-unreachable": 2,
        // 强制 typeof 表达式与有效的字符串进行比较
        "valid-typeof": 2,
        // 禁止不必要的分号
        "no-extra-semi": 1,
        // 禁止不必要的括号
        "no-extra-parens": 1,
        // 空代码块
        "no-empty": 1,
        // 禁止不必要的布尔转换
        "no-extra-boolean-cast": 1,

        // 最佳实践
        // 强制所有控制语句代码块用{}包围
        "curly": 2,
        // 禁用八进制字面量
        "no-octal": 2,
        // 禁止多次声明同一变量
        "no-redeclare": [2, {
            // 检查全局内建对象比如Object、Array、Number
            "builtinGlobals": true
        }],
        // 禁止自我赋值
        "no-self-assign": ["error", { "props": true }],
        // 要求 IIFE 使用括号括起来
        "wrap-iife": [2, "any"],
        // 与声明变量有关
        //变量未定义
        "no-undef": 2,
        // 禁止出现未使用过的变量
        "no-unused-vars": 2,
        //关键词与命名冲突
        "no-shadow-restricted-names": 2,
        // 在else代码块中return，else是多余的
        "no-else-return": 1,
        // 不允许多个空格
        "no-multi-spaces": 1,
        // 不允与自己比较作为条件
        "no-self-compare": 2,

        // 代码风格
        // 禁止数组或对象最后多余的逗号
        "comma-dangle": [1, "never"],
        // 禁止使用 空格 和 tab 混合缩进,当 tab 是为了对齐，允许混合使用空格和 tab。
        "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
        // 建议使用单引号
        "quotes": [1, "single"],
        // 缩进 4个空格
        'indent': [2, 4],
        //语句强制分号结尾
        "semi": [2, "always"],
        // 分号前后空格
        "semi-spacing": [1, {
            "before": false,
            "after": true
        }],
        // 在对象字面量的键和值之间使用一致的空格
        "key-spacing": [1, {
            "beforeColon": false,
            "afterColon": true
        }],

        // ES6相关
        // 禁止修改 const 声明的变量
        "no-const-assign": 2
    }
}