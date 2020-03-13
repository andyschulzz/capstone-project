import React from 'react'
import * as S from './Details.styles'

export default function Detail({ register, name, index }) {
  return (
    <>
      <S.Name>{name}</S.Name>
      <S.DetailWrapper>
        <S.Wrapper>
          <p>sets</p>
          <input
            ref={register({ required: true })}
            type="text"
            name={`sets[${index}]`}
          />
        </S.Wrapper>
        <span>&times;</span>
        <S.Wrapper>
          <p>reps</p>
          <input
            ref={register({ required: true })}
            type="text"
            name={`reps[${index}]`}
          />
        </S.Wrapper>
        <span>&times;</span>
        <S.Wrapper>
          <p>weight</p>
          <input ref={register()} type="text" name={`weight[${index}]`} />
        </S.Wrapper>
      </S.DetailWrapper>
    </>
  )
}
