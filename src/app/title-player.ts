export class TitlePlayer{
  titleTexts = ['designer.', 'coder.', 'illustrator.', 'thinker!'];

  typeWriter(text: string, i: number, callBack) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
      const selector = document.querySelector('.title-type-writer');
      if(selector){
        selector.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
        // wait for a while and call this function again for next character
        setTimeout(() => this.typeWriter(text, i + 1, callBack), 100);
      }else{
        setTimeout(() => this.typeWriter(text, i, callBack), 100);
      }
    } else {
      setTimeout(() => callBack(), 700);
    }
  }

  startTextAnimation(i: number) {
    if (i < this.titleTexts.length) {
      this.typeWriter(this.titleTexts[i], 0, () => this.startTextAnimation(i + 1));
    } else {
      setTimeout(() => this.startTextAnimation(0), 20000);
    }
  }

  public run() {
    this.startTextAnimation(0);
  }
}
