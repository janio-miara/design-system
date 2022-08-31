var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]]
      }
    return t
  }
import React from 'react'
import DataTable from 'react-data-table-component'
import { customStylesTable, columnsMock, dataMock } from './mock'
import * as Style from './styles'
import Empty from '../Empty'
import LoadingContainer from '../LoadingContainer'
import Paginate from '../Paginate'
const Tabela = _a => {
  var {
      customStyles = customStylesTable,
      columns = columnsMock,
      data = dataMock,
      ContainerVisible = true,
      loading = false,
      titleEmpty = 'Não localizamos itens!',
      subTitleEmpty = 'SubTitle',
      pageCount = 10,
      startPage = 1,
      changePage = () => null,
      height = '400px',
    } = _a,
    props = __rest(_a, [
      'customStyles',
      'columns',
      'data',
      'ContainerVisible',
      'loading',
      'titleEmpty',
      'subTitleEmpty',
      'pageCount',
      'startPage',
      'changePage',
      'height',
    ])
  return React.createElement(
    Style.Wrapper,
    { height: height },
    React.createElement(
      Style.Container,
      { height: height, visible: ContainerVisible },
      React.createElement(
        DataTable,
        Object.assign({}, props, {
          customStyles: customStyles,
          className: 'tabela-padrao',
          striped: true,
          pointerOnHover: true,
          highlightOnHover: true,
          columns: columns,
          data: data,
          noDataComponent: React.createElement(
            'div',
            { className: 'Empty' },
            React.createElement(Empty, { title: titleEmpty, subTitle: subTitleEmpty }),
          ),
          progressPending: loading,
          progressComponent: React.createElement(
            'div',
            { className: 'loading' },
            React.createElement(LoadingContainer, { loading: loading }),
          ),
        }),
      ),
    ),
    React.createElement(
      Style.Paginate,
      null,
      React.createElement(Paginate, { startPage: startPage, changePage: changePage, pageCount: pageCount }),
    ),
  )
}
//# sourceMappingURL=index.js.map
