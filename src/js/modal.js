// Получаем все кнопки открытия, модальные окна, кнопки закрытия и оверлеи
const openButtons = document.querySelectorAll('.open-modal-btn');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');
const body = document.body; // Ссылка на тег body

// Функция для открытия модального окна
openButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.id.replace('open-modal-', 'modal-');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex'; // Делаем модальное окно видимым
      body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
    }
  });
});

// Функция для закрытия модального окна
const closeModal = modal => {
  if (modal) {
    modal.style.display = 'none'; // Скрываем модальное окно
    body.style.overflow = ''; // Восстанавливаем прокрутку страницы
  }
};

// Закрытие по кнопке
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal'); // Ищем ближайшее модальное окно
    closeModal(modal);
  });
});

// Закрытие по клику на оверлей
modals.forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal-overlay')) {
      // Если клик по overlay
      closeModal(modal);
    }
  });
});
