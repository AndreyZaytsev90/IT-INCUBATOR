import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to="/dialogs/1">Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Olga</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Petr</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Sergey</NavLink>
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