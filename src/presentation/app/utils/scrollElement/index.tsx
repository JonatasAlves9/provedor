export function scrollToElement(id: string) {
  const element = document.getElementById(id);

  if (element) {
    const rect = element.getBoundingClientRect();
    const offsetTop = rect.top + window.pageYOffset;

    // Subtrai o espaço em pixels antes de rolar
    window.scroll({
      top: offsetTop - 50,
      behavior: 'smooth',
    });
  }
}
