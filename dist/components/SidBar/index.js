import React, { useState } from 'react';
import { faAlignJustify, faCalendar, faCog, faComment, faDesktop, faDotCircle, faFileAlt, faFileUpload, faGavel, faLayerGroup, faSearch, faStar, } from '@fortawesome/free-solid-svg-icons';
import * as Style from './styles';
import Modulo from './Modulos';
import logoWavecode from '../../assets/logoMini.png';
import logo from '../../assets/logo.png';
const side = [
    {
        id: 1,
        title: 'Dashboard',
        link: 'paniel_dashboard',
        subLink: null,
        icon: faDotCircle,
    },
    {
        id: 2,
        title: 'Prospecacao',
        link: 'prospecacao',
        icon: faLayerGroup,
        childrenLink: ['editais_qualificados', 'editais_favoritados', 'busca_manual', 'configuracoes_editais'],
        subLink: [
            {
                id: 2.1,
                title: 'Editais qualificados',
                link: 'editais_qualificados',
                icon: faDesktop,
            },
            {
                id: 2.2,
                title: 'Editais Favoritados',
                link: 'editais_favoritados',
                icon: faStar,
            },
            {
                id: 2.3,
                title: 'Busca Manual',
                link: 'busca_manual',
                icon: faSearch,
            },
            {
                id: 2.4,
                title: 'Configuracoes',
                link: 'configuracoes_editais',
                icon: faCog,
            },
        ],
    },
    {
        id: 3,
        title: 'Licitacao',
        link: 'prospecacao',
        icon: faGavel,
        childrenLink: ['lista_licitacoes', 'agenda_licitacoes'],
        subLink: [
            {
                id: 3.1,
                title: 'Lista Licitacoes',
                link: 'lista_licitacoes',
                icon: faAlignJustify,
            },
            {
                id: 2.2,
                title: 'Agenda Licitacoes',
                link: 'agenda_licitacoes',
                icon: faCalendar,
            },
        ],
    },
    {
        id: 3,
        title: 'Proposta',
        link: 'proposta',
        icon: faFileUpload,
        childrenLink: ['cadstrar_proposta', 'gerenciar_proposta', 'configuracoes_proposta'],
        subLink: [
            {
                id: 3.1,
                title: 'Cadastrar Proposta',
                link: 'cadstrar_proposta',
                icon: faFileAlt,
            },
            {
                id: 2.2,
                title: 'Gerenciar Proposta',
                link: 'gerenciar_proposta',
                icon: faCalendar,
            },
            {
                id: 2.4,
                title: 'Configuracoes',
                link: 'configuracoes_proposta',
                icon: faCog,
            },
        ],
    },
    {
        id: 5,
        title: 'Monitoramento',
        link: 'paniel_monitoramento',
        subLink: null,
        icon: faComment,
    },
];
export const SidBar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('');
    return (React.createElement(Style.Container, { open: open, onClick: () => setOpen(!open), onMouseOver: () => setOpen(true) },
        React.createElement("div", { className: "logo" },
            React.createElement("img", { src: !open ? logoWavecode : logo, alt: "logo" })),
        React.createElement("div", { className: "wrapperContainer" }, side.map(side => (React.createElement(Modulo, { side: side, open: open, setActive: setActive, active: active }))))));
};
//# sourceMappingURL=index.js.map