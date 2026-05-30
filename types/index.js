// types/index.js
import * as Blockly from 'blockly';
import { BooleanButtonField } from './bool.js';

// 注册布尔按钮字段
Blockly.fieldRegistry.register('field_boolean_buttons', BooleanButtonField);

// 未来如果有其他自定义字段（如 colour, date 等），可以在这里继续导入并注册
// import { MyColorField } from './color.js';
// Blockly.fieldRegistry.register('field_my_color', MyColorField);