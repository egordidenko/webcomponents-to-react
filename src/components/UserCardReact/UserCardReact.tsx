// @ts-ignore
import React, { FC } from 'react';
import './UserCard.styled.css';

export type TProps = {
  fullName: string, age: string | number, avatarURL: string
}
export const UserCardReact: FC<TProps> = ({ fullName, age, avatarURL }) => {
  return <div className='userCard__wrapper'>
    <div className='userCard__imageWrapper'>
      <img className='userCard__image' loading='lazy' src={avatarURL} alt='User Avatar' />
    </div>

    <div className='userCard__body'>
      <h3 className='userCard__title'>Имя Фамилия: {fullName}</h3>
      <h4 className='userCard__subtitle'>Возраст: {age}</h4>
    </div>
  </div>;
};
