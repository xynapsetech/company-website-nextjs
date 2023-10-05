import Link from "next/link";
import { GoInfo } from "react-icons/go";

export default function DetailsAlertBox(props: any) {
  let { title, description } = props;
  return (
    <div className="w-full flex items-center gap-5 border border-gray-400 dark:border-gray-800 p-5 my-2 rounded">
      <div className="text-lg">
        <GoInfo />
      </div>
      <div className=" flex flex-wrap gap-5">
        <div>{title} :</div>
        {description.startsWith("http") ? (
          <div>
            <Link
              href={description}
              className="font-light text-blue-400 hover:underline"
              target="_blank"
            >
              Click here to view.
            </Link>
          </div>
        ) : (
          <div className="break-all font-normal text-gray-500">
            {description}
          </div>
        )}
      </div>
    </div>
  );
}
