// 导入自定义字段（必须在定义块之前）
import './types/boolean_dropdown.js';

import * as Blockly from 'blockly';
import 'blockly/blocks';
import * as ZhHans from 'blockly/msg/zh-hans';

Blockly.setLocale(ZhHans);

// ========== 定义所有自定义块 ==========
Blockly.common.defineBlocksWithJsonArray([
  // ========== 数据类型 ==========
  {
    type: 'bool',
    message0: '布尔值 %1',
    args0: [{ type: 'field_boolean_dropdown', name: 'BOOL', value: false }],
    output: 'Boolean',
    colour: 210
  },
  {
    type: 'int',
    message0: '整数 %1',
    args0: [{ type: 'field_number', name: 'NUM', value: 0 }],
    output: 'Number',
    colour: 210
  },
  {
    type: 'double',
    message0: '浮点数 %1',
    args0: [{ type: 'field_number', name: 'NUM', value: 0 }],
    output: 'Number',
    colour: 210
  },
  {
    type: 'string',
    message0: '字符串 %1',
    args0: [{ type: 'field_input', name: 'TEXT', text: '字符串' }],
    output: 'String',
    colour: 210
  },

  // ========== 类型标记 ==========
  {
    type: 'boolType',
    message0: 'bool',
    output: 'Type',
    colour: 210
  },
  {
    type: 'intType',
    message0: 'int',
    output: 'Type',
    colour: 210
  },
  {
    type: 'doubleType',
    message0: 'double',
    output: 'Type',
    colour: 210
  },
  {
    type: 'stringType',
    message0: 'string',
    output: 'Type',
    colour: 210
  },
  {
    type: 'functionType',
    message0: 'function',
    output: 'Type',
    colour: 210
  },

  // ========== 变量操作 ==========
  {
    type: 'defineVar',
    message0: '定义变量 %1 类型%2 值%3',
    args0: [
      { type: 'field_input', name: 'name', text: 'name' },
      { type: 'input_value', name: 'type' },
      { type: 'input_value', name: 'input' }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 300
  },
  {
    type: 'get_var',
    message0: '变量 %1',
    args0: [{ type: 'field_input', name: 'VAR_NAME', text: 'x' }],
    output: null,
    colour: 300
  },
  {
    type: 'set_var',
    message0: '设 %1 = %2',
    args0: [
      { type: 'field_input', name: 'VAR_NAME', text: 'x' },
      { type: 'input_value', name: 'VALUE' }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 300
  },

  // ========== 函数 ==========
  {
    type: 'param_list',
    message0: '参数 %1 %2',
    args0: [
      { type: 'input_value', name: 'VALUE'},
      { type: 'input_value', name: 'NEXT', check: 'ParamList' }
    ],
    output: 'ParamList',
    colour: 160
  },
  {
    type: 'function',
    message0: '匿名函数 参数:%1 语句%2',
    args0: [
      { type: 'input_statement', name: 'INPUT' },
      { type: 'input_statement', name: 'DO' }
    ],
    colour: 160,
    output: 'Function'
  },
  {
    type: 'namedFunction',
    message0: '命名函数 名:%1参数:%1 语句%2',
    args0: [
      { type: 'field_input', name: 'NAME'},
      { type: 'input_statement', name: 'INPUT' },
      { type: 'input_statement', name: 'DO' }
    ],
    colour: 160,
    output: 'Function'
  },
  {
    type: 'call_func',
    message0: '调用函数 %1 参数 %2',
    args0: [
      { type: 'input_value', name: 'FUNC', check: 'Function' },
      { type: 'input_value', name: 'ARGS', check: 'ParamList' }
    ],
    colour: 160,
    output: null
  },
  {
    type: 'namedFunction',
    message0: '定义函数 %1 \n做 %2',
    args0: [
      { type: 'field_input', name: 'FUNC_NAME', text: 'myFunc' },
      { type: 'input_statement', name: 'DO' }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 160
  },
  {
    type: 'return',
    message0: '返回 %1',
    args0: [{ type: 'input_value', name: 'input' }],
    previousStatement: null,
    colour: 160
  },

  // ========== 流程控制 ==========
  {
    type: 'main',
    message0: '主程序 %1',
    args0: [{ type: 'input_statement', name: 'DO' }],
    previousStatement: null,
    nextStatement: null,
    colour: 160
  },
  {
    type: "for",
    message0: "for (%1 %2 %3) %4",
    args0: [
      { "type": "input_statement", "name": "INIT"},
      { "type": "input_value", "name": "COND", "check": "Boolean" },
      { "type": "input_statement", "name": "INCR"},
      { "type": "input_statement", "name": "DO" }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230
  },
  {
    type: 'break',
    message0: 'break',
    previousStatement: null,
    nextStatement: null,
    colour: 230
  },
  {
    type: 'continue',
    message0: 'continue',
    previousStatement: null,
    nextStatement: null,
    colour: 230
  },

  // ========== 运算 ==========
  {
    type: "math_op",
    message0: "%1 %2 %3",
    args0: [
      { "type": "input_value", "name": "LEFT", "check": "Number" },
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [["+", "ADD"], ["-", "SUB"], ["×", "MUL"], ["÷", "DIV"]]
      },
      { "type": "input_value", "name": "RIGHT", "check": "Number" }
    ],
    output: "Number",
    colour: 230
  },
  {
    type: "compare_op",
    message0: "%1 %2 %3",
    args0: [
      { "type": "input_value", "name": "LEFT" },
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [["=", "EQ"], ["≠", "NEQ"], ["<", "LT"], ["≤", "LE"], [">", "GT"], ["≥", "GE"]]
      },
      { "type": "input_value", "name": "RIGHT" }
    ],
    output: "Boolean",
    colour: 230
  },
  {
    type: 'logic_op',
    message0: '%1 %2 %3',
    args0: [
      { type: 'input_value', name: 'A', check: 'Boolean' },
      {
        type: 'field_dropdown',
        name: 'OP',
        options: [['且', 'AND'], ['或', 'OR']]
      },
      { type: 'input_value', name: 'B', check: 'Boolean' }
    ],
    output: 'Boolean',
    colour: 230
  },
  {
    type: 'logic_not',
    message0: '非 %1',
    args0: [{ type: 'input_value', name: 'A', check: 'Boolean' }],
    output: 'Boolean',
    colour: 230
  },

  // ========== 输出 ==========
  {
    type: 'log',
    message0: '记录 %1',
    args0: [{ type: 'input_value', name: 'name' }],
    previousStatement: null,
    nextStatement: null,
    colour: 240
  }
]);

// ========== 工具箱（按分类整理）==========
const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: '数据类型',
      colour: 210,
      contents: [
        { kind: 'block', type: 'int' },
        { kind: 'block', type: 'double' },
        { kind: 'block', type: 'string' },
        { kind: 'block', type: 'bool' }
      ]
    },
    {
      kind: 'category',
      name: '类型标记',
      colour: 210,
      contents: [
        { kind: 'block', type: 'intType' },
        { kind: 'block', type: 'doubleType' },
        { kind: 'block', type: 'stringType' },
        { kind: 'block', type: 'boolType' },
        { kind: 'block', type: 'functionType' }
      ]
    },
    {
      kind: 'category',
      name: '变量操作',
      colour: 300,
      contents: [
        { kind: 'block', type: 'defineVar' },
        { kind: 'block', type: 'get_var' },
        { kind: 'block', type: 'set_var' }
      ]
    },
    {
      kind: 'category',
      name: '函数',
      colour: 160,
      contents: [
        { kind: 'block', type: 'function' },
        { kind: 'block', type: 'namedFunction' },
        { kind: 'block', type: 'param_list' },
        { kind: 'block', type: 'call_func' },
        { kind: 'block', type: 'return' }
      ]
    },
    {
      kind: 'category',
      name: '流程控制',
      colour: 230,
      contents: [
        { kind: 'block', type: 'main' },
        { kind: 'block', type: 'controls_if' },
        { kind: 'block', type: 'for' },
        { kind: 'block', type: 'break' },
        { kind: 'block', type: 'continue' }
      ]
    },
    {
      kind: 'category',
      name: '运算',
      colour: 230,
      contents: [
        { kind: 'block', type: 'math_op' },
        { kind: 'block', type: 'compare_op' },
        { kind: 'block', type: 'logic_op' },
        { kind: 'block', type: 'logic_not' }
      ]
    },
    {
      kind: 'category',
      name: '输出',
      colour: 240,
      contents: [
        { kind: 'block', type: 'log' }
      ]
    }
  ]
};

// ========== 注入工作区 ==========
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: toolbox,
  disableSounds: true,
  sounds: false,
  trashcan: false
});

// ========== 保存/加载功能 ==========
function saveWorkspace() {
  const state = Blockly.serialization.workspaces.save(workspace);
  const jsonStr = JSON.stringify(state, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'blockly-workspace.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

function loadWorkspace(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const json = JSON.parse(e.target.result);
    workspace.clear();
    Blockly.serialization.workspaces.load(json, workspace);
  };
  reader.readAsText(file);
}

document.getElementById('saveBtn').addEventListener('click', saveWorkspace);
document.getElementById('openBtn').addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json';
  input.onchange = (e) => {
    if (e.target.files.length) loadWorkspace(e.target.files[0]);
  };
  input.click();
});

// ========== 限制只能有一个 main 块 ==========
workspace.addChangeListener((event) => {
  if (event.type === Blockly.Events.BLOCK_CREATE) {
    const createdBlock = workspace.getBlockById(event.blockId);
    if (createdBlock && createdBlock.type === 'main') {
      const allMain = workspace.getBlocksByType('main');
      if (allMain.length > 1) {
        alert('工作区只能存在一个主程序块！');
        createdBlock.dispose();
      }
    }
  }
});