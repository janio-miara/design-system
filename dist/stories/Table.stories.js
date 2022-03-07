import * as React from 'react';
import { Table } from '../components';
const header = [
    { id: 1, name: 'Nome' },
    { id: 2, name: 'Idade', width: '20%' },
    { id: 3, name: 'Profissao', align: 'center', width: '20%' },
    { id: 3, name: 'Profissao', align: 'center', width: '20%' },
    { id: 4, name: 'Action', align: 'center', width: '10%', action: () => console.log('aqui') },
];
const tableBody = [
    {
        id: 1,
        values: [
            { value: 'Nome vincv iuhsdfihsid isdhfiuhsdf isudhfuih sdifhui' },
            { value: 'Idade', width: '20%' },
            {
                value: 'Nome vincv iuhsdfihsid isdhfiuhsdf ',
                width: '20%',
                maxCaracter: 200,
            },
            {
                value: 'Profissao',
                width: '20%',
                maxCaracter: 20,
            },
            {
                value: 'Action',
                width: '10%',
                action: () => alert('aqui'),
            },
        ],
    },
    {
        id: 1,
        values: [
            { value: 'Nome vincv iuhsdfihsid isdhfiuhsdf isudhfuih sdifhui ' },
            { value: 'Idade', width: '20%' },
            {
                value: 'Nome vincv iuhsdfihsid isdhfiuhsdf ',
                width: '20%',
                maxCaracter: 200,
            },
            {
                value: 'Profissao',
                width: '20%',
                maxCaracter: 20,
            },
            {
                value: 'Action',
                width: '10%',
                action: () => alert('aqui'),
            },
        ],
    },
    {
        id: 1,
        values: [
            { value: 'Nome vincv iuhsdfihsid isdhfiuhsdf isudhfuih sdifhui ' },
            { value: 'Idade', width: '20%' },
            {
                value: 'Nome vincv iuhsdfihsid isdhfiuhsdf ',
                width: '20%',
                maxCaracter: 200,
            },
            {
                value: 'Profissao',
                width: '20%',
                maxCaracter: 20,
            },
            {
                value: 'Action',
                width: '10%',
                action: () => alert('aqui'),
            },
        ],
    },
    {
        id: 1,
        values: [
            { value: 'Nome vincv iuhsdfihsid isdhfiuhsdf isudhfuih sdifhui ' },
            { value: 'Idade', width: '20%' },
            {
                value: 'Nome vincv iuhsdfihsid isdhfiuhsdf ',
                width: '20%',
                maxCaracter: 200,
            },
            {
                value: 'Profissao',
                width: '20%',
                maxCaracter: 20,
            },
            {
                value: 'Action',
                width: '10%',
                action: () => alert('aqui'),
            },
        ],
    },
    {
        id: 1,
        values: [
            { value: 'Nome vincv iuhsdfihsid isdhfiuhsdf isudhfuih sdifhui ' },
            { value: 'Idade', width: '20%' },
            {
                value: 'Nome vincv iuhsdfihsid isdhfiuhsdf ',
                width: '20%',
                maxCaracter: 200,
            },
            {
                value: 'Profissao',
                width: '20%',
                maxCaracter: 20,
            },
            {
                value: 'Action',
                width: '10%',
                action: () => alert('aqui'),
            },
        ],
    },
    {
        id: 1,
        values: [
            { value: 'Nome vincv iuhsdfihsid isdhfiuhsdf isudhfuih sdifhui ' },
            { value: 'Idade', width: '20%' },
            {
                value: 'Nome vincv iuhsdfihsid isdhfiuhsdf ',
                width: '20%',
                maxCaracter: 200,
            },
            {
                value: 'Profissao',
                width: '20%',
                maxCaracter: 20,
            },
            {
                value: 'Action',
                width: '10%',
                action: () => alert('aqui'),
            },
        ],
    },
    {
        id: 1,
        values: [
            { value: 'Nome vincv iuhsdfihsid isdhfiuhsdf isudhfuih sdifhui ' },
            { value: 'Idade', width: '20%' },
            {
                value: 'Nome vincv iuhsdfihsid isdhfiuhsdf ',
                width: '20%',
                maxCaracter: 200,
            },
            {
                value: 'Profissao',
                width: '20%',
                maxCaracter: 20,
            },
            {
                value: 'Action',
                width: '10%',
                action: () => alert('aqui'),
            },
        ],
    },
    {
        id: 1,
        values: [
            { value: 'Nome vincv iuhsdfihs ' },
            { value: 'Idade', width: '20%' },
            {
                value: 'Nome vincv iuhsdfihsid ',
                width: '20%',
                maxCaracter: 200,
            },
            {
                value: 'Profissao',
                width: '20%',
                maxCaracter: 20,
            },
            {
                value: 'Action',
                width: '10%',
                action: () => alert('aqui'),
            },
        ],
    },
];
export default {
    title: 'Table',
    component: Table,
};
export const TableComponent = () => (React.createElement("div", { style: { width: '800px', height: '350px', padding: '10px' } },
    React.createElement(Table, { header: header, body: tableBody })));
//# sourceMappingURL=Table.stories.js.map