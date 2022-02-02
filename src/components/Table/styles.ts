import styled from 'styled-components'
import { theme } from '../Themes'

export const Container = styled.div`
  height: 100%;
  border-radius: 8px 8px 0 0;
  border: 1px solid ${theme.colors.shade10};
  box-shadow: ${theme.shadow.shad1};
  table {
    width: 100%;
    table-layout: fixed;
    height: fit-content;
  }

  .tbl-header {
    background-color: ${theme.colors.shade10};
    padding-right: 6px;
    border-radius: 8px 8px 0 0;
    box-shadow: ${theme.shadow.shad1};
    border-bottom: 1px solid ${theme.colors.shade30};

    td {
      font-weight: bold;
      font-size: ${theme.fontSizes.p1};
      padding: ${theme.spacing.space3};
      text-align: left;
      vertical-align: middle;
    }
  }

  .tbl-content {
    overflow-y: visible;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    max-height: calc(100% - 50px);
    overflow-x: auto;
    margin-top: 0;

    th {
      font-size: ${theme.fontSizes.p0};
      background-color: ${theme.colors.shade10};
    }

    td {
      font-size: ${theme.fontSizes.p0};
      padding: ${theme.spacing.space3};
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }

    tr {
      font-size: ${theme.fontSizes.p1};
      background-color: white;

      &:hover {
        background-color: ${theme.colors.cyan10};
      }
    }

    tr:nth-child(even) {
      font-size: ${theme.fontSizes.p0};
      background-color: ${theme.colors.shade10};

      &:hover {
        background-color: ${theme.colors.cyan10};
      }
    }

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
  }
`

export const ContainerHeader = styled.div`
  box-shadow: ${theme.shadow.shad1};
  border: 1px solid ${theme.colors.shade20};
  border-radius: 8px 8px 0 0;
  font-size: ${theme.fontSizes.p1};
  background-color: ${theme.colors.shade10};
  height: 50px;
  padding: ${theme.spacing.space3};
  table {
    width: 100%;
    table-layout: fixed;
  }
`

export const ContainerBody = styled.div`
  box-shadow: ${theme.shadow.shad1};
  border-radius: 8px 8px 0 0;
  font-size: ${theme.fontSizes.p1};
  background-color: ${theme.colors.shade10};

  table {
    width: 100%;
    table-layout: fixed;
  }
`

export const Wrapper = styled.div`
  height: 300px;
  overflow-x: auto;

  th {
    font-size: ${theme.fontSizes.p1};
    background-color: ${theme.colors.shade10};
  }

  td {
    font-size: ${theme.fontSizes.p1};
    padding: ${theme.spacing.space3};
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  tr {
    font-size: ${theme.fontSizes.p1};
    background-color: white;
    &:hover {
      background-color: ${theme.colors.cyan10};
    }
  }
  tr:nth-child(even) {
    font-size: ${theme.fontSizes.p0};
    background-color: ${theme.colors.shade20};
    &:hover {
      background-color: ${theme.colors.cyan10};
    }
  }
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`
