"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { departments } from "@/data/inner-pages";

export function DepartmentDirectory() {
  const [query, setQuery] = useState("");
  const reduceMotion = useReducedMotion();
  const filteredDepartments = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return departments.filter((department) =>
      `${department.name} ${department.category}`
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <div>
      <label className="directory-search">
        <Search size={18} aria-hidden="true" />
        <span className="sr-only">Search departments</span>
        <input
          type="search"
          placeholder="Search departments"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <p className="directory-count" aria-live="polite">
        {filteredDepartments.length}{" "}
        {filteredDepartments.length === 1 ? "category" : "categories"}
      </p>
      <motion.div layout className="inner-card-grid">
        {filteredDepartments.map((department, index) => {
          const Icon = department.icon;
          return (
            <motion.article
              layout
              key={department.slug}
              className="department-card"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                delay: reduceMotion ? 0 : index * 0.045,
              }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
            >
              <Link
                href={`/departments/${department.slug}`}
                className="department-card-link"
              >
                <div className="department-image">
                  <Image
                    src={department.image}
                    alt={`Representative image for the ${department.name} category`}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                  <span className="department-image-label">
                    Illustrative imagery
                  </span>
                </div>
                <div className="department-card-body">
                  <div className="department-card-meta">
                    <span className="department-icon">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span>{department.category}</span>
                  </div>
                  <h2>{department.name}</h2>
                  <p>{department.description}</p>
                  <span className="department-card-link-label">
                    View details <ArrowRight size={15} aria-hidden="true" />
                  </span>
                  <span className="sr-only">
                    , content pending hospital confirmation
                  </span>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </motion.div>
      {filteredDepartments.length === 0 && (
        <div className="empty-state">
          <span className="department-icon">
            <Search size={20} aria-hidden="true" />
          </span>
          <h2>No matching categories</h2>
          <p>
            Try another search, or contact the hospital for current department
            information.
          </p>
        </div>
      )}
      <p className="editorial-note">
        Department names and all service information on this page are editable
        placeholders pending hospital confirmation.
      </p>
    </div>
  );
}
