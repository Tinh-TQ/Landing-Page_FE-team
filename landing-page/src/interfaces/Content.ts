import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon"

export interface ContentType {
    header: string,
    content: string[]
    icon?: React.ForwardRefExoticComponent<Omit<AntdIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>>
}