export const checkStorage = () => localStorage.getItem('index') || 0

export const saveToLocalStorage = val => localStorage.setItem('index', val)