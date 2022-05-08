const createDOMen = function (el) {
  const backtick = '`';
  const slashEn = '/';
  const slashRu = '\\';
  el.innerHTML = `'<div class="container">
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
                <div class="keys" rus='Ё' pressedShift="~">${backtick}</div>
                <div class="keys" rus='1' pressedShift="!">1</div>
                <div class="keys" rus='2' pressedShift="@">2</div>
                <div class="keys" rus='3' pressedShift="#">3</div>
                <div class="keys" rus='4' pressedShift="$">4</div>
                <div class="keys" rus='5' pressedShift="%">5</div>
                <div class="keys" rus='6' pressedShift="^">6</div>
                <div class="keys" rus='7' pressedShift="&">7</div>
                <div class="keys" rus='8' pressedShift="*">8</div>
                <div class="keys" rus='9' pressedShift="(">9</div>
                <div class="keys" rus='0' pressedShift=")">0</div>
                <div class="keys" rus='-' pressedShift="_">-</div>
                <div class="keys" rus='=' pressedShift="+">=</div>
                <div class="keys backspace_key" rus='Backspace' pressedShift="Backspace">Backspace</div>
            </div>
            <div class="row">
                <div class="keys tab_key" rus='Tab' pressedShift="Tab">Tab</div>
                <div class="keys" rus='Й' pressedShift="Q">Q</div>
                <div class="keys" rus='Ц' pressedShift="W">W</div>
                <div class="keys" rus='У' pressedShift="E">E</div>
                <div class="keys" rus='К' pressedShift="R">R</div>
                <div class="keys" rus='Е' pressedShift="T">T</div>
                <div class="keys" rus='Н' pressedShift="Y">Y</div>
                <div class="keys" rus='Г' pressedShift="U">U</div>
                <div class="keys" rus='Ш' pressedShift="I">I</div>
                <div class="keys" rus='Щ' pressedShift="O">O</div>
                <div class="keys" rus='З' pressedShift="P">P</div>
                <div class="keys" rus='Х' pressedShift="{">[</div>
                <div class="keys" rus='Ъ' pressedShift="}">]</div>
                <div class="keys slash_key" rus='${slashRu}' pressedShift="|">${slashEn}</div>
            </div>
            <div class="row">
                <div class="keys caps_lock_key" rus='Caps Lock' pressedShift="Caps Lock">Caps Lock</div>
                <div class="keys" rus='Ф' pressedShift="A">A</div>
                <div class="keys" rus='Ы' pressedShift="S">S</div>
                <div class="keys" rus='В' pressedShift="D">D</div>
                <div class="keys" rus='А' pressedShift="F">F</div>
                <div class="keys" rus='П' pressedShift="G">G</div>
                <div class="keys" rus='Р' pressedShift="H">H</div>
                <div class="keys" rus='О' pressedShift="J">J</div>
                <div class="keys" rus='Л' pressedShift="K">K</div>
                <div class="keys" rus='Д' pressedShift="L">L</div>
                <div class="keys" rus='Ж' pressedShift=":">;</div>
                <div class="keys" rus='Э' pressedShift='"'>'</div>
                <div class="keys enter_key" rus='Enter' pressedShift="Enter">Enter</div>
            </div>
            <div class="row">
                <div class="keys shift_key shift_left" rus='Shift' pressedShift="Shift">Shift</div>
                <div class="keys" rus='Я' pressedShift="Z">Z</div>
                <div class="keys" rus='Ч' pressedShift="X">X</div>
                <div class="keys" rus='С' pressedShift="C">C</div>
                <div class="keys" rus='М' pressedShift="V">V</div>
                <div class="keys" rus='И' pressedShift="B">B</div>
                <div class="keys" rus='Т' pressedShift="N">N</div>
                <div class="keys" rus='Ь' pressedShift="M">M</div>
                <div class="keys" rus='Б' pressedShift="<">,</div>
                <div class="keys" rus='Ю' pressedShift=">">.</div>
                <div class="keys" rus='.' pressedShift="?">/</div>
                <div class="keys dir_key dir_top" rus='↑' pressedShift="↑">↑</div>
                <div class="keys shift_key shift_right" rus='Shift' pressedShift="Shift">Shift</div>
            </div>
            <div class="row">
                <div class="keys ctrl_key ctrl_left" rus=Ctrl'' pressedShift="Ctrl">Ctrl</div>
                <div class="keys fn_key" rus='Fn' pressedShift="Fn">Fn</div>
                <div class="keys win_key" rus='Win' pressedShift="Win">Win</div>
                <div class="keys alt_key alt_left" rus='Alt' pressedShift="Alt">Аlt</div>
                <div class="keys space_key" rus='Space' pressedShift="Space">Space</div>
                <div class="keys alt_key alt_right" rus='Alt' pressedShift="Alt">Аlt</div>
                <div class="keys ctrl_key ctrl_right" rus='Ctrl' pressedShift="Ctrl">Ctrl</div>
                <div class="keys dir_key dir_left" rus='←' pressedShift="←">←</div>
                <div class="keys dir_key dir_bottom" rus='↓' pressedShift="↓">↓</div>
                <div class="keys dir_key dir_right" rus='→' pressedShift="→">→</div>
                <div class="keys non_visible" dir_key dir_right" rus='.' pressedShift=".">.</div>
            </div>
        </div>
    </div>
    <textarea name="text" id="" autofocus></textarea>
</div>`;
};

export default createDOMen;
