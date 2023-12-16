const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Отлично, товар: Майка для программиста в корзине; цена: 2899', 'success')})
}

const alertTrigger2 = document.getElementById('liveAlertBtn2')
if (alertTrigger2) {
  alertTrigger2.addEventListener('click', () => {
    appendAlert('Отлично, товар: Майка для программиста в корзине; цена: 1899', 'success')
  })
}

const alertTrigger3 = document.getElementById('liveAlertBtn3')
if (alertTrigger3) {
  alertTrigger3.addEventListener('click', () => {
    appendAlert('Отлично, товар: Майка для программиста в корзине; цена: 2999', 'success')
  })
}

const alertTrigger4 = document.getElementById('liveAlertBtn4')
if (alertTrigger4) {
  alertTrigger4.addEventListener('click', () => {
    appendAlert('Отлично, товар: Майка для программиста в корзине; цена: 3899', 'success')
  })
}

const alertTrigger5 = document.getElementById('liveAlertBtn5')
if (alertTrigger5) {
  alertTrigger5.addEventListener('click', () => {
    appendAlert('Отлично, товар: Майка для программиста в корзине; цена: 999', 'success')
  })
}
