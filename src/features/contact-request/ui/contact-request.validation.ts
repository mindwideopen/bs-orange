const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateName(value: string) {
  const name = value.trim();

  if (!name) {
    return "Введите имя";
  }

  if (name.length < 2 || name.length > 50) {
    return "Имя должно содержать от 2 до 50 символов";
  }

  if (!/^[\p{L} '\u2019-]+$/u.test(name)) {
    return "Используйте только буквы, пробел, дефис и апостроф";
  }

  return true;
}

export function validatePhone(value: string) {
  const phone = value.trim();

  if (!phone) {
    return true;
  }

  if (!/^[+0-9 ()-]+$/.test(phone)) {
    return "Используйте цифры, +, пробелы, скобки и дефисы";
  }

  const digits = phone.replace(/\D/g, "");

  if (digits.length < 7 || digits.length > 15) {
    return "Номер телефона должен содержать от 7 до 15 цифр";
  }

  return true;
}

export function validateEmail(value: string) {
  const email = value.trim();

  if (!email) {
    return "Введите E-mail";
  }

  if (!emailPattern.test(email)) {
    return "Введите корректный E-mail";
  }

  return true;
}

export function validateMessage(value: string) {
  const message = value.trim();

  if (!message) {
    return "Введите сообщение";
  }

  if (message.length < 10 || message.length > 2000) {
    return "Сообщение должно содержать от 10 до 2000 символов";
  }

  return true;
}