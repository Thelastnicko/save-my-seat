import { Table, Space } from "antd";

const data = [
  {
    key: "1",
    name: "John Brown",
    date: "22/5/2022",
    guests: 32,
    table: "8",
    time: "8:00 pm",
  },
  {
    key: "2",
    name: "Jim Green",
    date: "22/5/2022",
    guests: 42,
    table: "5",
    time: "8:00 pm",
  },
  {
    key: "3",
    name: "Joe Black",
    date: "22/5/2022",
    guests: 32,
    table: "2",
    time: "8:00 pm",
  },
];

export default (props) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Guests",
      dataIndex: "guests",
      key: "guests",
    },

    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Table",
      dataIndex: "table",
      key: "table",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Edit </a>
          <a onClick={() => props.delete(record._id)}>Delete </a>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={props.data} />;
};
