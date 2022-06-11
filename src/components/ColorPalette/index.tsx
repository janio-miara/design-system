import React from 'react'
import * as Style from './styles'

export const ColorPalette = () => {
  return (
    <Style.Container>
      <div className="wrapper">
        <div className="blue40">blue40</div>
        <div className="blue30">blue30</div>
        <div className="blue20">blue20</div>
        <div className="blue10">blue10</div>
      </div>
      <div className="wrapper">
        <div className="cyan40">cyan40</div>
        <div className="cyan30">cyan30</div>
        <div className="cyan20">cyan20</div>
        <div className="cyan10">cyan10</div>
      </div>
      <div className="wrapper">
        <div className="mint40">mint40</div>
        <div className="mint30">mint30</div>
        <div className="mint20">mint20</div>
        <div className="mint10">mint10</div>
      </div>
      <div className="wrapper">
        <div className="red40">red40</div>
        <div className="red30">red30</div>
        <div className="red20">red20</div>
        <div className="red10">red10</div>
      </div>
      <div className="wrapper">
        <div className="honey40">honey40</div>
        <div className="honey30">honey30</div>
        <div className="honey20">honey20</div>
        <div className="honey10">honey10</div>
      </div>
    </Style.Container>
  )
}
