import {BookOutlined,BankOutlined, CopyOutlined } from '@ant-design/icons'
import { University } from '../Cards';




export const NavTab = [
    {
      tab: "Universities",
      key: "0",
      content: <University/>,
      icon: '/svg/book.svg',
      iconColored: '/svg/book-orange.svg'
    },
    {
      tab: "Schools",
      key: "1",
      content: <University/>,
      icon: '/svg/feather.svg',
      iconColored: '/svg/feather-orange.svg'
    },
    {
      tab: "General",
      key: "2",
      content: <University/>,
      icon: '/svg/globe.svg',
      iconColored: '/svg/globe-orange.svg'

    },
  ];