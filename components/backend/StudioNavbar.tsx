import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
  return (
    <>
        <div className="flex items-center justify-between p-5">
            <Link href={"/"} className="text-[#fff] flex items-center">
                <ArrowUturnLeftIcon className="text-[#fff] h-6 w-6 mr-2" />
                Retour au site
            </Link>
            <img src="/images/logo.svg" className="w-8 mr-2" alt="" />
        </div>
        <>{props.renderDefault(props)}</>
    </>
  )
}

export default StudioNavbar