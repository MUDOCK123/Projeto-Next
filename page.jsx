"use client";
import React, { useState } from 'react';

import styles from './styles.module.css'; // Importe os estilos específicos para o componente


export default function DiscordPage() {
    const [state, setState] = useState(0)
    console.log({state})
    return (
        <>
            <header className={styles.header}>
                <button className={styles.bate_papo_button} onClick={() => setState(state+1)}>
                    <div className={styles['bate_papo_button_content']}>
                        <h4>DISCORD {state}</h4>
                    </div>
                </button>
            </header>
        
            <div className={styles.principal}>
                {[...Array(9)].map((_, index) => (
                    <img key={index} className={styles.perfil2} src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Logo perfil" />
                ))}
            </div>

            <div className={styles.conversa}>
                {/* Conteúdo da seção de conversa */}
            </div>

            <footer className={styles.footer}>
                <button className={styles.caixa}>
                    <div className={styles.input}>
                        <input type="text" placeholder="Digite aqui" />
                    </div>
                </button>
            </footer>
        </>
    );
}
