import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Container, ContainerLink, WrapperLink } from './styles'

const Modulo = ({ side, open, active, setActive }: any) => {
  const { icon, childrenLink, link, subLink, title } = side
  const [newOpen, setNewOpen] = useState<boolean>(false)
  const [activeLink, setActiveLink] = useState<boolean>(false)
  const [activePaiLink, setActivePaiLink] = useState<boolean>(false)

  useEffect(() => {
    setActivePaiLink(childrenLink?.includes(active))
  }, [active])

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setNewOpen(() => open)
      }, 250)
    } else {
      setNewOpen(() => open)
    }
  }, [open])

  const handleActiveSubLink = (event: any) => {
    event.stopPropagation()
    setActiveLink(!activeLink)
  }

  const handleActive = (event: any, propslink?: any) => {
    event.stopPropagation()
    setActive(propslink || link)
  }
  return (
    <>
      {!subLink ? (
        <Container open={open} active={!subLink && active === link} onClick={(event: any) => handleActive(event)}>
          <div className="wrapper">
            <FontAwesomeIcon icon={icon} size="lg" />
            {newOpen && (
              <span className="title">
                <b>{title}</b>
              </span>
            )}
          </div>
        </Container>
      ) : (
        <ContainerLink
          open={open}
          activeLink={activeLink}
          onClick={(event: any) => handleActiveSubLink(event)}
          activePaiLink={activePaiLink}
        >
          <div className="wrapperTitle">
            <span>
              <FontAwesomeIcon icon={icon} size="lg" />
              {newOpen && (
                <span className="title">
                  <b>{title}</b>
                </span>
              )}
            </span>
            {newOpen && (
              <div>
                <FontAwesomeIcon icon={faAngleDown} size="sm" rotation={activeLink ? 180 : undefined} />
              </div>
            )}
          </div>
          {activeLink &&
            subLink.map((link: any) => (
              <WrapperLink
                open={open}
                active={link.link === active}
                onClick={(event: any) => handleActive(event, link.link)}
              >
                <div className="wrapper">
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                  {newOpen && <span className="titleLink">{link.title}</span>}
                </div>
              </WrapperLink>
            ))}
        </ContainerLink>
      )}
    </>
  )
}

export default Modulo
