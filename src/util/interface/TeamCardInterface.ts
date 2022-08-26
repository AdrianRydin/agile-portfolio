export interface TeamCardInterface {
    firstName: string,
    lastName: string,
    role: string,
    image: string
    react: number,
    html: number,
    css: number,
    uiUx: number,
    typescript: number,
    node: number

}

export interface TeamCardProps {
    props: TeamCardInterface;
}

