import React from "react";
import s from "./Dialogs.module.css"

const Dialogs = () => {
  return (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              <div className={s.dialog + " " + s.active}>
                  Andrey
              </div>
              <div className={s.dialog}>
                  Olga
              </div>
              <div className={s.dialog}>
                  Petr
              </div>
              <div className={s.dialog}>
                  Sergey
              </div>
          </div>
          <div className={s.messages}>
              <div>
                  <div className={s.message}>Hi</div>
                  <div className={s.message}>How is your it-kamasutra</div>
                  <div className={s.message}>Hoy</div>

              </div>
          </div>
      </div>
  )
}

export default Dialogs