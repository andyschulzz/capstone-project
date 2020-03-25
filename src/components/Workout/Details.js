import React from 'react'
import * as S from './Details.styles'
import PropTypes from 'prop-types'

Detail.propTypes = {
  register: PropTypes.func.isRequired,
  name: PropTypes.string,
  index: PropTypes.number.isRequired,
  sets: PropTypes.string,
  reps: PropTypes.string,
  weight: PropTypes.string,
}

export default function Detail({ register, name, index, sets, reps, weight }) {
  return (
    <>
      <S.H3>{name}</S.H3>
      <S.DetailWrapper>
        <S.Wrapper>
          <p>sets</p>
          <input
            ref={register({ required: true, min: 1 })}
            type="text"
            name={`sets[${index}]`}
            required
            pattern="[0-9]*"
            min="1"
            placeholder={sets}
          />
        </S.Wrapper>
        <span>&times;</span>
        <S.Wrapper>
          <p>reps</p>
          <input
            ref={register({ required: true, min: 1 })}
            type="text"
            name={`reps[${index}]`}
            required
            pattern="[0-9]*"
            min="1"
            placeholder={reps}
          />
        </S.Wrapper>
        <span>&times;</span>
        <S.Wrapper>
          <p>weight</p>
          <input
            ref={register()}
            type="text"
            pattern="[0-9]*"
            name={`weight[${index}]`}
            placeholder={weight}
          />
        </S.Wrapper>
      </S.DetailWrapper>
    </>
  )
}
