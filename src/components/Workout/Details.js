import React from 'react'
import * as S from './Details.styles'
import PropTypes from 'prop-types'

Detail.propTypes = {
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default function Detail({ register, name, index }) {
  return (
    <>
      <S.Name>{name}</S.Name>
      <S.DetailWrapper>
        <S.Wrapper>
          <p>sets</p>
          <input
            ref={register({ required: true, min: 1 })}
            type="number"
            name={`sets[${index}]`}
            required
          />
        </S.Wrapper>
        <span>&times;</span>
        <S.Wrapper>
          <p>reps</p>
          <input
            ref={register({ required: true, min: 1 })}
            type="number"
            name={`reps[${index}]`}
            required
          />
        </S.Wrapper>
        <span>&times;</span>
        <S.Wrapper>
          <p>weight</p>
          <input ref={register()} type="number" name={`weight[${index}]`} />
        </S.Wrapper>
      </S.DetailWrapper>
    </>
  )
}
