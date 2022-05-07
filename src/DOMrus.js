const createDOMrus = function (el) {
  const mark = '"';
  el.innerHTML = `<div class="container">
  <div class="night__mode">
      <div class="toggle__circle"></div>
  </div>
  <div class="change__light__colors">
      <div class="colors">
          <input type="color" class="colors__input">
      </div>
  </div>
  <div class="keyboard__wrapp">
      <div class="keyboard__lights"></div>
      <div class="keyboard__keys">
<div class="row">
    <div class="keys" pressedShift="Ё">Ё</div>
    <div class="keys" pressedShift="!">1</div>
    <div class="keys" pressedShift='${mark}'>2</div>
    <div class="keys" pressedShift="№">3</div>
    <div class="keys" pressedShift=";">4</div>
    <div class="keys" pressedShift="%">5</div>
    <div class="keys" pressedShift=":">6</div>
    <div class="keys" pressedShift="?">7</div>
    <div class="keys" pressedShift="*">8</div>
    <div class="keys" pressedShift="(">9</div>
    <div class="keys" pressedShift=")">0</div>
    <div class="keys" pressedShift="_">-</div>
    <div class="keys" pressedShift="+">=</div>
    <div class="keys backspace_key" pressedShift="Backspace">Backspace</div>
</div>
<div class="row">
    <div class="keys tab_key" pressedShift="Tab">Tab</div>
    <div class="keys" pressedShift="Й">Й</div>
    <div class="keys" pressedShift="Ц">Ц</div>
    <div class="keys" pressedShift="У">У</div>
    <div class="keys" pressedShift="К">К</div>
    <div class="keys" pressedShift="Е">Е</div>
    <div class="keys" pressedShift="Н">Н</div>
    <div class="keys" pressedShift="Г">Г</div>
    <div class="keys" pressedShift="Ш">Ш</div>
    <div class="keys" pressedShift="Щ">Щ</div>
    <div class="keys" pressedShift="З">З</div>
    <div class="keys" pressedShift="Х">Х</div>
    <div class="keys" pressedShift="Ъ">Ъ</div>
    <div class="keys slash_key" pressedShift="/">\</div>
</div>
<div class="row">
    <div class="keys caps_lock_key" pressedShift="Caps Lock">Caps Lock</div>
    <div class="keys" pressedShift="Ф">Ф</div>
    <div class="keys" pressedShift="Ы">Ы</div>
    <div class="keys" pressedShift="В">В</div>
    <div class="keys" pressedShift="А">А</div>
    <div class="keys" pressedShift="П">П</div>
    <div class="keys" pressedShift="Р">Р</div>
    <div class="keys" pressedShift="О">О</div>
    <div class="keys" pressedShift="Л">Л</div>
    <div class="keys" pressedShift="Д">Д</div>
    <div class="keys" pressedShift="Ж">Ж</div>
    <div class="keys" pressedShift="Э">Э</div>
    <div class="keys enter_key" pressedShift="Enter">Enter</div>
</div>
<div class="row">
    <div class="keys shift_key shift_left" pressedShift="Shift">Shift</div>
    <div class="keys" pressedShift="Я">Я</div>
    <div class="keys" pressedShift="Ч">Ч</div>
    <div class="keys" pressedShift="С">С</div>
    <div class="keys" pressedShift="М">М</div>
    <div class="keys" pressedShift="И">И</div>
    <div class="keys" pressedShift="Т">Т</div>
    <div class="keys" pressedShift="Ь">Ь</div>
    <div class="keys" pressedShift="Б">Б</div>
    <div class="keys" pressedShift="Ю">Ю</div>
    <div class="keys" pressedShift=",">.</div>
    <div class="keys dir_key dir_top" pressedShift="↑">↑</div>
    <div class="keys shift_key shift_right" pressedShift="Shift">Shift</div>
</div>
<div class="row">
    <div class="keys ctrl_key ctrl_left" pressedShift="Ctrl">Ctrl</div>
    <div class="keys fn_key" pressedShift="Fn">Fn</div>
    <div class="keys win_key" pressedShift="Win">Win</div>
    <div class="keys alt_key alt_left" pressedShift="Alt">Alt</div>
    <div class="keys space_key" pressedShift="Space">Space</div>
    <div class="keys alt_key alt_right" pressedShift="Alt">Alt</div>
    <div class="keys ctrl_key ctrl_right" pressedShift="Ctrl">Ctrl</div>
    <div class="keys dir_key dir_left" pressedShift="←">←</div>
    <div class="keys dir_key dir_bottom" pressedShift="↓">↓</div>
    <div class="keys dir_key dir_right" pressedShift="→">→</div>
    <div class="keys non_visible"></div>
</div>
</div>
    </div>
    <textarea name="text" id=""></textarea>
</div>`;
};

export default createDOMrus;
