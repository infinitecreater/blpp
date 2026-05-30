// types/bool.js
import * as Blockly from 'blockly';

/**
 * 布尔下拉菜单字段
 * 使用内置 field_dropdown，封装 true/false 选项
 */
class BooleanDropdownField extends Blockly.FieldDropdown {
  /**
   * @param {boolean} value 初始值（true 或 false）
   * @param {Function} validator 可选验证函数
   */
  constructor(value, validator) {
    // 定义选项：[显示文本, 存储值]
    const options = [
      ['真', 'TRUE'],
      ['假', 'FALSE']
    ];
    super(options, validator);
    this.SERIALIZABLE = true;
    // 如果传入了初始值，设置为对应的选项值
    if (value === true || value === 'TRUE') {
      this.setValue('TRUE');
    } else if (value === false || value === 'FALSE') {
      this.setValue('FALSE');
    } else {
      this.setValue('FALSE'); // 默认
    }
  }

  /**
   * 从 JSON 创建字段实例
   * @param {Object} options 包含 value (boolean) 字段
   * @returns {BooleanDropdownField}
   */
  static fromJson(options) {
    const value = options.value === true || options.value === 'TRUE';
    return new BooleanDropdownField(value);
  }

  /**
   * 获取字段的布尔值（方便代码生成器使用）
   * @returns {boolean}
   */
  getBoolean() {
    return this.getValue() === 'TRUE';
  }
}

// 注册字段类型
Blockly.fieldRegistry.register('field_boolean_dropdown', BooleanDropdownField);