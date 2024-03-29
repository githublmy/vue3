/*
 * @Description: 消息提示
 */

type ElMessageType = 'success' | 'warning' | 'info' | 'error'
/**
 * @description: 提示信息
 * @param {string} msg 提示内容
 * @param {string} type 'success' | 'warning' | 'info' | 'error'
 * @return {*}
 */
const message = (msg: string, type?: ElMessageType): void => {
  ElMessage({
    showClose: true,
    message: msg,
    type: type
  })
}

/**
 * @description: 成功提示
 * @param {string} msg 提示信息
 */
const success = (msg: string) => {
  message(msg, 'success')
}
/**
 * @description: 普通消息提示
 * @param {string} msg 提示信息
 */
const info = (msg: string) => {
  message(msg, 'info')
}
/**
 * @description: 失败消息提示
 * @param {string} msg 提示信息
 */
const error = (msg: string) => {
  message(msg, 'error')
}

/**
 * @description: 警告消息提示
 * @param {string} msg 提示信息
 */
const warning = (msg: string) => {
  message(msg, 'warning')
}

/**
 * @description: 确定提示框
 * @param {string} msg 提示消息
 * @param {Fun} ok 成功回调
 * @param {Fun} cancel 取消回调
 */
const confirm = (msg: string) => {
  return ElMessageBox.confirm(msg, '提示', {
    type: 'warning'
  })
}

export default {
  success,
  info,
  error,
  warning,
  confirm
}
