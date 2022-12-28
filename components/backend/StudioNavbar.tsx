import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
  return (
    <>
        <div className="flex justify-between items-center p-5">
            <Link href={"/"} className="text-[#eb8034] flex items-center">
                <ArrowUturnLeftIcon className="text-[#eb8034] h-6 w-6 mr-2" />
                Retour au site
            </Link>
            <img src="/images/logo-blk.png" className="w-8 mr-2" alt="" />
        </div>
        <>{props.renderDefault(props)}</>
    </>
  )
}

export default StudioNavbar