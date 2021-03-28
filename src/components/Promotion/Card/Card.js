import React from 'react';
import './Card.css'

export default function PromotionCard({promotion}) {
    return(
        <div className="promotion-card">
            <img src={promotion.imageUrl} className="promotion-card__image"/>
            <div className="promotion-card__info">
                <h1 className="promotion-card__title">{promotion.title}</h1>
                <span className="promotion-card__price">R$ {promotion.price}</span>
                {promotion.comments.length > 0 && (
                    <div className="promotion-card__comment">"{promotion.comments[0].comment}"</div>
                )}
                <footer className="promotion-card__footer">

                    <div className="promotion-card__comments-count">
                        {promotion.comments.length}
                        {promotion.comments.length > 1 ? ' Comentários' : ' Comentário'}
                    </div>
                    <a href={promotion.url} target="_blank" className="promotion-card__link"> Acessar</a>
                </footer>
            </div>
        </div>
    )
}