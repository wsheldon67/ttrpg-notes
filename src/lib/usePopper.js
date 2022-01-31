import { createPopper } from "@popperjs/core";

export default function createPopperAction() {
  let popperElement, popperTooltip, popperParams
  let popper

  function initPopper() {
    if (popperElement && popperTooltip) {
      popper = createPopper(popperElement, popperTooltip, popperParams)
    }
  }

  function destroyPopper() {
    if (popper) {
      popper.destroy()
      popper = null
    }
  }

  function usePopperElement(el) {
    popperElement = el
    initPopper()
    return {
      destroy() {
        popperElement = null
        destroyPopper()
      }
    }
  }

  function usePopperTooltip (el, params) {
    popperTooltip = el
    popperParams = params
    initPopper()

    return {
      update(newParams) {
        popperParams = newParams
        popper.setOptions(popperParams)
      },
      destroy() {
        popperTooltip = null
        destroyPopper()
      }
    }
  }
  return [usePopperElement, usePopperTooltip]
}