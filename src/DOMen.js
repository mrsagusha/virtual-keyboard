const createDOMen = function (el) {
  const backtick = '`';
  const slashEn = '/';
  const slashRu = '\\';
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
                <div class="keys" rus='Ё' pressedShiftRus="Ё" pressedShift="~">${backtick}</div>
                <div class="keys" rus='1' pressedShiftRus="!" pressedShift="!">1</div>
                <div class="keys" rus='2' pressedShiftRus='"' pressedShift="@">2</div>
                <div class="keys" rus='3' pressedShiftRus="№" pressedShift="#">3</div>
                <div class="keys" rus='4' pressedShiftRus=";" pressedShift="$">4</div>
                <div class="keys" rus='5' pressedShiftRus="%" pressedShift="%">5</div>
                <div class="keys" rus='6' pressedShiftRus=":" pressedShift="^">6</div>
                <div class="keys" rus='7' pressedShiftRus="?" pressedShift="&">7</div>
                <div class="keys" rus='8' pressedShiftRus="*" pressedShift="*">8</div>
                <div class="keys" rus='9' pressedShiftRus="(" pressedShift="(">9</div>
                <div class="keys" rus='0' pressedShiftRus=")" pressedShift=")">0</div>
                <div class="keys" rus='-' pressedShiftRus="_" pressedShift="_">-</div>
                <div class="keys" rus='=' pressedShiftRus="+" pressedShift="+">=</div>
                <div class="keys backspace_key" rus='Backspace' pressedShiftRus="Backspace" pressedShift="Backspace">Backspace</div>
            </div>
            <div class="row">
                <div class="keys tab_key" rus='Tab' pressedShiftRus="Tab" pressedShift="Tab">Tab</div>
                <div class="keys" rus='Й' pressedShiftRus="Й" pressedShift="Q">Q</div>
                <div class="keys" rus='Ц' pressedShiftRus="Ц" pressedShift="W">W</div>
                <div class="keys" rus='У' pressedShiftRus="У" pressedShift="E">E</div>
                <div class="keys" rus='К' pressedShiftRus="К" pressedShift="R">R</div>
                <div class="keys" rus='Е' pressedShiftRus="Е" pressedShift="T">T</div>
                <div class="keys" rus='Н' pressedShiftRus="Н" pressedShift="Y">Y</div>
                <div class="keys" rus='Г' pressedShiftRus="Г" pressedShift="U">U</div>
                <div class="keys" rus='Ш' pressedShiftRus="Ш" pressedShift="I">I</div>
                <div class="keys" rus='Щ' pressedShiftRus="Щ" pressedShift="O">O</div>
                <div class="keys" rus='З' pressedShiftRus="З" pressedShift="P">P</div>
                <div class="keys" rus='Х' pressedShiftRus="Х" pressedShift="{">[</div>
                <div class="keys" rus='Ъ' pressedShiftRus="Ъ" pressedShift="}">]</div>
                <div class="keys slash_key" rus='${slashRu}' pressedShiftRus="/" pressedShift="|">${slashRu}</div>
            </div>
            <div class="row">
                <div class="keys caps_lock_key" rus='Caps Lock' pressedShiftRus="Caps Lock "pressedShift="Caps Lock">Caps Lock</div>
                <div class="keys" rus='Ф' pressedShiftRus="Ф" pressedShift="A">A</div>
                <div class="keys" rus='Ы' pressedShiftRus="Ы" pressedShift="S">S</div>
                <div class="keys" rus='В' pressedShiftRus="В" pressedShift="D">D</div>
                <div class="keys" rus='А' pressedShiftRus="А" pressedShift="F">F</div>
                <div class="keys" rus='П' pressedShiftRus="П" pressedShift="G">G</div>
                <div class="keys" rus='Р' pressedShiftRus="Р" pressedShift="H">H</div>
                <div class="keys" rus='О' pressedShiftRus="О" pressedShift="J">J</div>
                <div class="keys" rus='Л' pressedShiftRus="Л" pressedShift="K">K</div>
                <div class="keys" rus='Д' pressedShiftRus="Д" pressedShift="L">L</div>
                <div class="keys" rus='Ж' pressedShiftRus="Ж" pressedShift=":">;</div>
                <div class="keys" rus='Э' pressedShiftRus="Э" pressedShift='"'>'</div>
                <div class="keys enter_key" rus='Enter' pressedShiftRus="Enter" pressedShift="Enter">Enter</div>
            </div>
            <div class="row">
                <div class="keys shift_key shift_left" rus='Shift' pressedShiftRus="Shift" pressedShift="Shift">Shift</div>
                <div class="keys" rus='Я' pressedShiftRus="Я"pressedShift="Z">Z</div>
                <div class="keys" rus='Ч' pressedShiftRus="Ч"pressedShift="X">X</div>
                <div class="keys" rus='С' pressedShiftRus="С"pressedShift="C">C</div>
                <div class="keys" rus='М' pressedShiftRus="М"pressedShift="V">V</div>
                <div class="keys" rus='И' pressedShiftRus="И"pressedShift="B">B</div>
                <div class="keys" rus='Т' pressedShiftRus="Т"pressedShift="N">N</div>
                <div class="keys" rus='Ь' pressedShiftRus="Ь"pressedShift="M">M</div>
                <div class="keys" rus='Б' pressedShiftRus="Б"pressedShift="<">,</div>
                <div class="keys" rus='Ю' pressedShiftRus="Ю"pressedShift=">">.</div>
                <div class="keys" rus='.' pressedShiftRus=","pressedShift="?">/</div>
                <div class="keys dir_key dir_top" rus='↑' pressedShiftRus="↑" pressedShift="↑">↑</div>
                <div class="keys shift_key shift_right" rus='Shift' pressedShiftRus="Shift" pressedShift="Shift">Shift</div>
            </div>
            <div class="row">
                <div class="keys ctrl_key ctrl_left" rus='Ctrl' pressedShiftRus="Ctrl" pressedShift="Ctrl">Ctrl</div>
                <div class="keys fn_key" rus='Fn' pressedShiftRus="Fn" pressedShift="Fn">Fn</div>
                <div class="keys win_key" rus='Win' pressedShiftRus="Win" pressedShift="Win">Win</div>
                <div class="keys alt_key alt_left" rus='Alt' pressedShiftRus="Alt" pressedShift="Alt">Аlt</div>
                <div class="keys space_key" rus='Space' pressedShiftRus="Space" pressedShift="Space">Space</div>
                <div class="keys alt_key alt_right" rus='Alt' pressedShiftRus="Alt" pressedShift="Alt">Аlt</div>
                <div class="keys ctrl_key ctrl_right" rus='Ctrl' pressedShiftRus="Ctrl" pressedShift="Ctrl">Ctrl</div>
                <div class="keys dir_key dir_left" rus='←' pressedShiftRus="←" pressedShift="←">←</div>
                <div class="keys dir_key dir_bottom" rus='↓' pressedShiftRus="↓" pressedShift="↓">↓</div>
                <div class="keys dir_key dir_right" rus='→' pressedShiftRus="→" pressedShift="→">→</div>
                <div class="keys non_visible" dir_key dir_right" rus='.' pressedShiftRus="." pressedShift=".">.</div>
            </div>
        </div>
    </div>
    <div class='description'><p>Клавиатура создавалась в ОС Windows.</p><p>Для смены языка необходимо нажать Shift + Alt.</p><p class='upd'>(в правом верхем углу присутствует ночной режим и цветовая настройка клавиатуры)</p></div>
    <textarea name="text" id="" autofocus></textarea>
</div>`;
};

export default createDOMen;
