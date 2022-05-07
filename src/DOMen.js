const createDOMen = function (el) {
  const backtick = '`';
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
                <div class="keys" pressedShift="~">${backtick}</div>
                <div class="keys" pressedShift="!">1</div>
                <div class="keys" pressedShift="@">2</div>
                <div class="keys" pressedShift="#">3</div>
                <div class="keys" pressedShift="$">4</div>
                <div class="keys" pressedShift="%">5</div>
                <div class="keys" pressedShift="^">6</div>
                <div class="keys" pressedShift="&">7</div>
                <div class="keys" pressedShift="*">8</div>
                <div class="keys" pressedShift="(">9</div>
                <div class="keys" pressedShift=")">0</div>
                <div class="keys" pressedShift="_">-</div>
                <div class="keys" pressedShift="+">=</div>
                <div class="keys backspace_key" pressedShift="Backspace">Backspace</div>
            </div>
            <div class="row">
                <div class="keys tab_key" pressedShift="Tab">Tab</div>
                <div class="keys" pressedShift="Q">Q</div>
                <div class="keys" pressedShift="W">W</div>
                <div class="keys" pressedShift="E">E</div>
                <div class="keys" pressedShift="R">R</div>
                <div class="keys" pressedShift="T">T</div>
                <div class="keys" pressedShift="Y">Y</div>
                <div class="keys" pressedShift="U">U</div>
                <div class="keys" pressedShift="I">I</div>
                <div class="keys" pressedShift="O">O</div>
                <div class="keys" pressedShift="P">P</div>
                <div class="keys" pressedShift="{">[</div>
                <div class="keys" pressedShift="}">]</div>
                <div class="keys slash_key" pressedShift="|">\</div>
            </div>
            <div class="row">
                <div class="keys caps_lock_key" pressedShift="Caps Lock">Caps Lock</div>
                <div class="keys" pressedShift="A">A</div>
                <div class="keys" pressedShift="S">S</div>
                <div class="keys" pressedShift="D">D</div>
                <div class="keys" pressedShift="F">F</div>
                <div class="keys" pressedShift="G">G</div>
                <div class="keys" pressedShift="H">H</div>
                <div class="keys" pressedShift="J">J</div>
                <div class="keys" pressedShift="K">K</div>
                <div class="keys" pressedShift="L">L</div>
                <div class="keys" pressedShift=":">;</div>
                <div class="keys" pressedShift='"'>'</div>
                <div class="keys enter_key" pressedShift="Enter">Enter</div>
            </div>
            <div class="row">
                <div class="keys shift_key shift_left" pressedShift="Shift">Shift</div>
                <div class="keys" pressedShift="Z">Z</div>
                <div class="keys" pressedShift="X">X</div>
                <div class="keys" pressedShift="C">C</div>
                <div class="keys" pressedShift="V">V</div>
                <div class="keys" pressedShift="B">B</div>
                <div class="keys" pressedShift="N">N</div>
                <div class="keys" pressedShift="M">M</div>
                <div class="keys" pressedShift="<">,</div>
                <div class="keys" pressedShift=">">.</div>
                <div class="keys" pressedShift="?">/</div>
                <div class="keys dir_key dir_top" pressedShift="↑">↑</div>
                <div class="keys shift_key shift_right" pressedShift="Shift">Shift</div>
            </div>
            <div class="row">
                <div class="keys ctrl_key ctrl_left" pressedShift="Ctrl">Ctrl</div>
                <div class="keys fn_key" pressedShift="Fn">Fn</div>
                <div class="keys win_key" pressedShift="Win">Win</div>
                <div class="keys alt_key alt_left" pressedShift="Alt">Аlt</div>
                <div class="keys space_key" pressedShift="Space">Space</div>
                <div class="keys alt_key alt_right" pressedShift="Alt">Аlt</div>
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

export default createDOMen;
