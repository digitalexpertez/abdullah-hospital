/* oxlint-disable react/only-export-components */
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DepartmentDirectory } from "@/components/department-directory";
import { PageHero } from "@/components/inner-page-ui";

export const metadata = {
  title: "Departments | Abdullah Hospital",
  description:
    "Browse editable department categories. Services and availability are pending confirmation by Abdullah Hospital.",
};

export default function DepartmentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Explore our departments"
        title={
          <>
            Care for every <em>next step.</em>
          </>
        }
        description="Browse department categories and contact the hospital for current information. Names and descriptions shown here are editable placeholders pending confirmation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Departments" }]}
      />
      <section className="inner-section">
        <div className="site-shell">
          <div className="directory-heading">
            <div>
              <span className="eyebrow">
                <span />
                Find a department
              </span>
              <h2>
                Explore by <em>specialty.</em>
              </h2>
              <p>
                Search the categories below. Confirmed department details will
                be published when supplied by the hospital.
              </p>
            </div>
            <Link className="button button-outline" href="/contact">
              Ask us a question <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <DepartmentDirectory />
        </div>
      </section>
    </main>
  );
}
