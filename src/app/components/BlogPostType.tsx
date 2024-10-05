import Image from "next/image";

interface BlogPostType {
    type: string
    iconPath: string
}

const types: BlogPostType[] = [
    {type: "GAME", iconPath: "_game_"},
    {type: "MUSIC", iconPath: "_music_"},
    {type: "MOVIE", iconPath: "_movie_"},
    {type: "TV", iconPath: "_tv_"},
    {type: "BOOK", iconPath: "_book_"},
    {type: "TECH", iconPath: "_tech_"},
    {type: "GENERAL", iconPath: "_general_"},

]

interface TypeProp {
    propType: string
}


function BlogPostTypeComponent({propType}: TypeProp) {

    let type: BlogPostType | undefined = types.find((blogPostType) => blogPostType.type === propType)
    

    if (type === undefined) {
        return
    }

    return(
        <div>
            <Image className="mx-4 hidden dark:block" src={`/blog/types/dark${type.iconPath}icon.png`} alt="" width={40} height={40}/>
            <Image className="mx-4 dark:hidden block" src={`/blog/types/light${type.iconPath}icon.png`} alt="" width={40} height={40}/>
        </div>
    )
}

export default BlogPostTypeComponent;
export type {BlogPostType};