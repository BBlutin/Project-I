function Logo(props: any) {

    const { renderDefault, title } = props

    return (
        <div className="flex items-center space-x-1 ">
            <div className="py-1 pl-1">
                <img src="/images/logo.svg" width={30} height={30} className="rounded-full" alt="BLK" />
            </div>
            {renderDefault && <>{renderDefault(props)}</>}
        </div>
    )
}

export default Logo